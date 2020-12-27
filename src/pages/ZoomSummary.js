import React from "react";
import PropTypes from "prop-types"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';
import dataAccess from "../dataAccess.js";
import Donut from "../components/Donut.js";
import {schools, staff} from "../config.js";

/*
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const classes = useStyles();
*/
const dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc') // dependent on utc plugin
var timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

// Return the bucket positions for the meeting at startTimeUTC
function getZoomNumber(startTimeUTC, firstReportDateUTC, hostDuration, zoomTimes) {

  var result = {day: -1, zoom: -1}; // initialize result
  const t = dayjs(startTimeUTC).tz("America/Los_Angeles");     //TODO Local 
  const startTime = (t.hour() * 60) + (t.minute());    // in minutes from midnight
  const endTime = startTime + (hostDuration / 60);

  // TODO remove 
  // var diff;
  // Figure the zoom index
  for (var i = 0; i < zoomTimes.length; i++) {
      //diff = startTime - zoomTimes[i];
      //if ( (diff >= -5) && (diff <= 15) ) { // Meeting started 5 min early to 15 min late from scheduled time
      // Better? Meeting started 15 minutes late or earlier and ended at least 5 minutes after the scheduled start time
      if ( (startTime <= zoomTimes[i] + 15 ) && ( endTime >= zoomTimes[i] + 5) ) { 
          result.zoom = i;
      }
      //todo handle Friday in more accurate way
      if (t.format("d") === "5" ) {  //special case of Friday
          if ((startTime >= 505 && (startTime <= 625 ))) { // 8:25 to 10:25
            result.zoom = 4;      // it's the Friday 8:30
          }
      }
  };
  result.day = dayjs(startTimeUTC).diff(firstReportDateUTC,"day");
  return result;
}

// transform the meeting data
function createSummary(host, zoomTimes, startDate, endDate, meetings) {
  
  var pList = [];

  const numDays =  1 + dayjs(endDate).diff(startDate, 'day');
  const startDateUTC = dayjs(startDate).utc().format("YYYY-MM-DD");

  // Do data transformation to show minutes spent in each available Zoom by day
  meetings.forEach((m) => {

      var hostDuration = m.duration;  // Note: host joins should add up to near this number. Worse connection means greater diff

      var pos = getZoomNumber(m.start_time, startDateUTC, hostDuration, zoomTimes);
      m.pos = pos;
      var participants = m.participants;

      if ((pos.zoom >= 0) && (pos.day >=0)) {
        // This is an instructional meeting so scan the particpants
        participants.forEach((p) => {
          var found;
          
          if (pList.length > 0) {
              found = pList.find((e) => e.name === p.name);
          }
          if (found) {  //It was found, so add to participation data
              found.days[pos.day].zooms[pos.zoom].duration += p.duration; // Add to number of seconds
              found.days[pos.day].zooms[pos.zoom].hostDuration = hostDuration; // Set host duration 
              found.days[pos.day].zooms[pos.zoom].joins += 1; 
          } else {
            // Make a new plist entry with buckets for paricipation by day and Zoom number
            if (p.duration > 90) {
              var pNew = {...p};
              pNew.days = new Array(numDays);
              for (var i=0; i<numDays;i++){
                  const a = [
                    // item for each possible Zoom in day
                    {duration: 0, hostDuration: -1, joins: 0},
                    {duration: 0, hostDuration: -1, joins: 0},
                    {duration: 0, hostDuration: -1, joins: 0},
                    {duration: 0, hostDuration: -1, joins: 0},
                    {duration: 0, hostDuration: -1, joins: 0},
                  ]; 
                  pNew.days[i] = {zooms: a};
              }
              pNew.days[pos.day].zooms[pos.zoom].duration += p.duration; // Add to number of minutes
              pNew.days[pos.day].zooms[pos.zoom].hostDuration = hostDuration; // Set host duration 
              pNew.days[pos.day].zooms[pos.zoom].joins += 1; 
              pList.push(pNew);
            } 
          }
        });
      }
  });

  // Sometimes the host may not be the first participant in the list so...
  const hostIndex = pList.findIndex(p => p.name === host);
  if (hostIndex > 0) {
    const theHost = pList[hostIndex];
    var newList = [theHost];
    pList = newList.concat(pList.slice(0, hostIndex).concat(pList.slice(hostIndex + 1, pList.length)))
  }

  const sortedParticipants = pList.slice(0, 1).concat(pList.slice(1, pList.length).sort( (a, b) => {
    if (a.name > b.name) return 1;
    if (b.name  > a.name) return -1;
    return 0;
  }));


  // Take another pass through the participants to fill in hostDuration for all meetings
  meetings.forEach((m) => {
    var hostDuration = m.duration;
    var pos = getZoomNumber(m.start_time, startDateUTC, hostDuration, zoomTimes);
    try {
      sortedParticipants.forEach((p) => {
        if ((pos.zoom >= 0) && (pos.day >=0)) {
          p.days[pos.day].zooms[pos.zoom].hostDuration = hostDuration; 
        }
      });
    }
    catch (err) {
      console.log(err);
    }
  });

  // return:
  // List of participants in host's with time in each meeting
  // Number of days in range
  // Updated meetings
  return {participants: sortedParticipants, numDays: numDays, meetings: meetings};       
}


class ZoomSummary extends React.Component {
  constructor(props) {
    super(props)
    

    this.state = {
      meetings: [],
      participants: [],
      school: "GBE",
      host: "",
      endDate: dayjs().format("YYYY-MM-DD"),
      startDate: dayjs().add(-4, 'day').format("YYYY-MM-DD"),
      numDays: 5,
      loading: false
      }
  }
    
  async fetchTheData() {
    // ? set loading and error states?
    // Create query

    const {host, startMinutes, startDate, endDate} = this.state;
    
    if (host === "") {
      // Initial loading state
      return
    }
    this.setState({...this.state, loading: true});

    var meetings;

    const query = this.composeQuery(host, startDate, endDate);
    
    meetings = await dataAccess.meetingsFetch(query);

    if (meetings) {
      const {numDays, participants} = createSummary(host, startMinutes, startDate, endDate, meetings);
      this.setState({...this.state, 
        participants: participants,
        meetings: meetings, 
        numDays: numDays,
        loading: false
      });
    } else {
      this.setState({...this.state,
        participants: [],
        meetings: [],
        numDays: 0,
        loading: false
      });
    }
  }
  
  async componentDidMount() {
    this.fetchTheData();
  }

  async componentDidUpdate(prevProps, prevState) {
    if ( (this.state.host === prevState.host) &&
         (this.state.startDate === prevState.startDate) &&
         (this.state.endDate === prevState.endDate)) {
    } else {
      await this.fetchTheData();
    }
  }
  

  // Render each meeting with which scheduled session it is.
  renderMeetingList() {
    const { meetings, zoomTimesText } = this.state;
    var rows = [];

    if (meetings.length <= 0) return;

    rows.push(<h2 key={1001}>Meetings</h2>);
    rows.push(<p key={1002}></p>);
    rows.push(<em key={1003}><p>All meetings hosted, with (est. class time), duration for host and [id].</p></em>);
  
    meetings.forEach(m => {
      const meetingDate = dayjs(m.start_time).tz("America/Los_Angeles").format("ddd MM-DD hh:mm");
      const duration = Math.round(m.duration / 60);
      const s = `${meetingDate} (${m.pos.zoom >= 0 ? zoomTimesText[m.pos.zoom] : "other"}) for ${duration}m. [${m.uuid}]`;
      rows.push(<p key={m.id}>{s}</p>);
    });
    return rows;
  }

  composeQuery(host, startDate, endDate) {
    const startDateUTC = dayjs(startDate).utc().format("YYYY-MM-DDThh:mm:ss");
    // Add 24 hours to end date to make query inclusive of end date's meetings
    const endDateUTC  = dayjs(endDate).utc().add(1, "day").format("YYYY-MM-DDThh:mm:ss");
    return `SELECT * FROM meetings m WHERE m.start_time >= '${startDateUTC}' and m.end_time <= '${endDateUTC}' and startswith(m.topic, '${host}')`
  }

  renderForm() {
    const {school, host, startDate, endDate} = this.state;
  
    const schoolChange = (event) => {
      const school = event.target.value;
      this.setState({...this.state, 
        school: school, 
        host: "",
        meetings: [],
        participants: []
      });
    };
  
    const hostChange = (event) => {
      const host = event.target.value;
      const staffMember = staff.find((e) => e.name === host);
      const schoolName = staffMember ? staffMember.school : "GBE";  //TODO handle correctly
      const school = schools.find((e) => e.name === schoolName);
      this.setState({...this.state, 
        host: host, 
        startMinutes: school.startMinutes, 
        zoomTimesText: school.zoomTimesText});
    };
  
    const startDateChange = (date) => {
      const d = dayjs(date).format("YYYY-MM-DD");
      this.setState({...this.state, startDate: d});
    };
  
    const endDateChange = (date) => {
      const d = dayjs(date).format("YYYY-MM-DD");
      this.setState({...this.state, endDate: d});
    };
  
    // - {school} {host} {startDate} to {endDate}
    const schoolOptions = [];
    schools.forEach(s => {
      const opt = <option key={s.name} value={s.name}>{s.name}</option>
      schoolOptions.push(opt);
    });

    var hostOptions = [];
    const schoolStaff = staff.filter((s) => s.school === school);

    hostOptions.push(<option key={"x2"} value={""}>{""}</option>)
    schoolStaff.forEach(s => {
      const opt = <option key={s.name} value={s.name}>{s.name}</option>
      hostOptions.push(opt);
    });

    return(
      <div>
         <Grid container justify="space-around">
         <FormControl>
            <InputLabel htmlFor="school-native-simple">School</InputLabel>
            <Select
              native
              value={school}
              onChange={schoolChange}
              inputProps={{
                name: 'school',
                id: 'school-native-simple',
              }}
            >
              {schoolOptions}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="host-native-simple">Teacher</InputLabel>
            <Select
              native
              value={host}
              onChange={hostChange}
              inputProps={{
                name: 'host',
                id: 'host-native-simple',
              }}
            >
              {hostOptions}
            </Select>
          </FormControl>
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <KeyboardDatePicker
             disableToolbar
             variant="inline"
             format="yyyy-MM-dd"
             margin="normal"
             id="startDate"
             label="Start Date"
             value={dayjs(startDate).utc()}
             onChange={startDateChange}
             autoOk={true}
             disableFuture={true}
             maxDate={dayjs(endDate).utc()}
             KeyboardButtonProps={{
               'aria-label': 'change date',
             }}
           />
           <KeyboardDatePicker
             disableToolbar
             variant="inline"
             format="yyyy-MM-dd"
             margin="normal"
             id="endDate"
             label="End Date"
             value={dayjs(endDate).utc()}
             onChange={endDateChange}
             autoOk={true}
             disableFuture={true}
             minDate={dayjs(startDate).utc()}
             KeyboardButtonProps={{
               'aria-label': 'change date',
             }}
           />
       </MuiPickersUtilsProvider>
       </Grid>
      </div>
    )
  }

  renderHeadings() {

    var cols = [];
    const {numDays, startDate} = this.state;
    const dt = dayjs(startDate);

    if (numDays <= 0) return;

    cols.push(<TableCell key={-1}>Participant</TableCell>);

    for (var d=0; d < numDays; d++) {
      const colDate = dt.add(d, 'day');
      cols.push(<TableCell key={d}>{colDate.format("ddd")}<br/>{colDate.format("MM-DD")}</TableCell>);
    }
    return cols;
  }

  renderParticipant(p) {
    const {startDate} = this.state;
    
    var dayZooms=[];

    var key = 0;
    for (var d=0; d < this.state.numDays; d++) {
      var zooms = [];
      var dow = dayjs(startDate + "T00:00:00").add(d, 'day').format("ddd");
      
      if (dow === "Fri") {
        //Friday only has one zoom
        zooms.push(<Donut key={key++} participantDuration={p.days[d].zooms[4].duration} hostDuration={p.days[d].zooms[4].hostDuration} />)
      } else {
        // other days
        for (var z=0; z < p.days[d].zooms.length - 1; z++) {
          zooms.push(<Donut key={key++} participantDuration={p.days[d].zooms[z].duration} hostDuration={p.days[d].zooms[z].hostDuration} />)
        }
      }
      dayZooms.push(
        <TableCell key={key++}>{zooms}</TableCell>
      )
    }

    if (!p || this.state.numDays === 0) {
      p = (<p>No instructional meetings</p>);
      return (<TableRow key={p.name} hover={true}>
        <TableCell>No regular meetings found.</TableCell>
      </TableRow>)
    } else {
      return (
        <TableRow key={p.name} hover={true}>
          <TableCell>{p.name}</TableCell>
          {dayZooms}
        </TableRow>
        )
    }
  }
  
  renderSummary() {
    const {participants} = this.state;

    return (
    <>
    {participants.length > 0 ? <Table>
    <TableHead>
      <TableRow>
        {this.renderHeadings()}
      </TableRow>
    </TableHead>
      <TableBody>
        {participants.map((p /*, index*/) => (
          this.renderParticipant(p)
        ))}
    </TableBody>
    </Table> : <p>No instructional meetings found</p>}
    {this.renderMeetingList()}
    </>      
    )         
  }

  render() {
    const { loading, hasError } = this.state;

    return (
    <Card>
      <CardContent>
        {this.renderForm()}
        <Divider />
        {loading ? <div>Loading...</div> : 
          hasError ? <div>Error occured.</div> : this.renderSummary()}
      </CardContent>
    </Card>
    );
  }

}

ZoomSummary.propTypes = {
  meetings: PropTypes.array,
  host: PropTypes.string,
  school: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string
}

export default ZoomSummary;
