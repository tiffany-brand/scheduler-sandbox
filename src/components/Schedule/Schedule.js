import React, { useState } from 'react'
import {
    Scheduler,
    Resources,
    WeekView,
    Appointments,
    AppointmentTooltip,
    GroupingPanel,
    AllDayPanel,
    Toolbar,
    ViewSwitcher,
    DragDropProvider
} from '@devexpress/dx-react-scheduler-material-ui';

import {
    ViewState, EditingState, GroupingState, IntegratedGrouping, IntegratedEditing,
} from '@devexpress/dx-react-scheduler';

import { appointments, crews, equipment } from './demoData';

const resources = [{
    fieldName: 'crewId',
    title: 'Crew',
    instances: crews
}, {
    fieldName: 'equipId',
    title: 'Equipment',
    allowMultiple: true,
    instances: equipment
}
];

const groupOrientation = viewName => viewName.split(' ')[0];
const grouping = [{
    resourceName: 'crewId',
}];


function Schedule() {

    const [data, setData] = useState(appointments);
    console.log(data)

    return (
        <div>
            <p>Test Schedule</p>
            <Scheduler data={data} height={660}>
                <ViewState defaultCurrentDate="2021-03-21" />
                <GroupingState
                    grouping={grouping}
                    groupOrientation={groupOrientation}
                />

                <WeekView
                    startDayHour={9}
                    endDayHour={11}
                    excludedDays={[0, 6]}
                    cellDuration={60}
                    name="Vertical Orientation"
                />
                <WeekView
                    startDayHour={9}
                    endDayHour={17}
                    excludedDays={[0, 6]}
                    name="Horizontal Orientation"
                />

                <Appointments />
                <AllDayPanel />
                <Resources
                    data={resources}
                    mainResourceName="crewId"
                />

                <IntegratedGrouping />

                <AppointmentTooltip />

                <GroupingPanel />
                <Toolbar />
                <ViewSwitcher />

            </Scheduler>
        </div>
    )
}

export default Schedule
