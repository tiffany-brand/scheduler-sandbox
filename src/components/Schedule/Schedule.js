import React, { useState } from 'react'
import {
    Scheduler,
    Resources,
    WeekView,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    GroupingPanel,
    AllDayPanel,
    Toolbar,
    ViewSwitcher,
    ConfirmationDialog,
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

    const commitChanges = ({ added, changed, deleted }) => {
        if (added) {
            const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
            setData([...data, { id: startingAddedId, ...added }]);
        }
        if (changed) {
            setData(data.map(appointment => (
                changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)));
        }
        if (deleted !== undefined) {
            setData(data.filter(appointment => appointment.id !== deleted));
        }
        return data;
    };

    return (
        <div>
            <p>Test Schedule</p>
            <Scheduler data={data} height={660}>
                <ViewState defaultCurrentDate="2021-03-21" />
                <GroupingState
                    grouping={grouping}
                    groupOrientation={groupOrientation}
                />
                <EditingState
                    onCommitChanges={commitChanges}
                />
                <IntegratedEditing />
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
                <ConfirmationDialog />
                <Appointments />
                <AllDayPanel />
                <Resources
                    data={resources}
                    mainResourceName="crewId"
                />

                <IntegratedGrouping />

                <AppointmentTooltip
                    showOpenButton
                    showDeleteButton
                />
                <AppointmentForm />
                <GroupingPanel />
                <Toolbar />
                <ViewSwitcher />
                <DragDropProvider />
            </Scheduler>
        </div>
    )
}

export default Schedule
