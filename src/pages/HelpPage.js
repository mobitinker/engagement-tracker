import React from "react";

const HelpPage = () => {
  return (
    <div>
      <h3>General</h3>
        <p>This app reports on Zoom meeting participation based on historical data from Zoom.</p>
        <p>We assume the teacher is using their personal meeting ID.</p>
        <p>During bad connections, Zoom keeps a separate record for each connection
          by a participant. Zoom meeting reports don't aggregate them to get a total time
          for each participant. This app does.</p>
        <p>If a student uses more than one spelling of his/her name, it will appear
          there are multiple students.
        </p>
        <p>Only data from Zoom is used. There are no class enrollment data. Instead,
          we show all meeting participants, some of whom may not be students. Integrating 
          with PowerSchool would fix this. 
        </p>
        <p>Zoom meeting data is available from the start of the school year.</p>
      <h3>Dashboard</h3>
        <p>Current attendance status might later appear here. For now, this is just a placeholder.</p>
      <h3>Zoom Summary</h3>
        <p>This shows all meetings hosted by a teacher (or staff member). It is useful to filling out roll calls
          for multiple days, automatically. Choose a school, teacher and time range. 
          One week is an good time range. The report shows all attendees for that teacher for 
          the entire date range.</p>
        <p>Hovering over a blue 'pie' will display the number of minutes attended.</p>
        <p>If a participant is present at least 90 seconds at any of the teacher's classes
           he/she will show up in the report. Students and other participants all appear.</p>
        <p>Since all meetings are not named for a class, we need to make a guess at which ones 
          are classes. We call meeting a class when the meeting is active 5 minutes early to 15 minutes late, according to class schedule.</p>
        <p>Class times are assumed to be on Mon-Thu:</p>
           <li>Elementary - 8:30, 9:30, 1:30 and 2:30</li>
           <li>Middle School - 10:00, 11:00, 12:30, 2:00</li>
           <li>High School - 10:00, 11:00, 12:30, 1:30</li>
        <p>Keeping a meeting open from one class to the next will lose the detail for the second meeting.</p>
        <p>At the end of the report is a list of all the teacher's meetings and the class each was
          attributed to, if any. The average participant meeting time shows how much instruction was received 
          (more accurately than total meeting time).
        </p>
        <p>Please report inaccuracies.</p>
    </div>
  );
};

export default HelpPage;
