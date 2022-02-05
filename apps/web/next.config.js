const withTM = require('next-transpile-modules')([
	'ui',
	'@fullcalendar/react',
	'@fullcalendar/common',
	'@fullcalendar/daygrid',
	'@fullcalendar/timegrid',
	'@fullcalendar/interaction',
	'@fullcalendar/scrollgrid',
	'@fullcalendar/list',
]);

module.exports = withTM({
	reactStrictMode: true,
});
