export const API_BASE_URL = 'http://localhost:3000'
export const ERROR_TOAST_STYLE = {
  backgroundColor: 'oklch(70.4% 0.191 22.216)',
  color: 'white',
  border: '1px solid red',
}
export const SUCCESS_TOAST_STYLE = {
  backgroundColor: '#7bf1a8',
  color: 'black',
  border: '1px solid green',
}


//QUERY FOR FETCHING ALL EVENT samarpann=> SELECT sum(amount), event_id, events.name FROM donations INNER JOIN events ON donations.event_id = events.id GROUP BY event_id, events.name;