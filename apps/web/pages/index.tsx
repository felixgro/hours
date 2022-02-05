import React from 'react';
import FullCalendar, { BASE_OPTION_REFINERS } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import scrollGridPlugin from '@fullcalendar/scrollgrid';
import listPlugin from '@fullcalendar/list';

(BASE_OPTION_REFINERS as any).schedulerLicenseKey = String;

export default function Web() {
	return (
		<div
			style={{
				padding: '0 30px',
			}}
		>
			<FullCalendar
				schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
				plugins={[
					dayGridPlugin,
					interactionPlugin,
					scrollGridPlugin,
					listPlugin,
					timeGridPlugin,
				]}
				headerToolbar={{
					left: 'dayGridMonth,timeGridWeek,timeGridDay listWeek',
					center: 'title',
				}}
				initialView="timeGridWeek"
				nowIndicator={true}
				allDaySlot={false}
				weekNumbers={false}
				selectable={true}
				selectMirror={false}
				locale="de"
				dateClick={(info) => console.log(info)}
				select={(info) => console.log(info)}
				unselect={(info) => console.log(info)}
			/>
		</div>
	);
}
