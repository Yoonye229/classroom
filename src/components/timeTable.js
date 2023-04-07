import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import {Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';


function timeTable()  {
    
        return <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(timeTable);
export default timeTable;       