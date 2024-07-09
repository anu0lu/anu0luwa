// const currentDate = new Date();
// const currentDayOfMonth = currentDate.getDate();
// const currentDay = currentDate.toLocaleString('default', { weekday: 'long' });
// const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
// const currentYear = currentDate.getFullYear();
// const currentFormattedDate = currentDate.toLocaleDateString();



// document.getElementById('current-date').textContent = `${currentDayOfMonth}`;
// // document.getElementById('current-date').textContent = `Date: ${currentFormattedDate}`;
// document.getElementById('current-day').textContent = `${currentDay}`;
// document.getElementById('current-month').textContent = `${currentMonth}`;
// document.getElementById('current-year').textContent = `${currentYear}`;










const calendar = document.querySelector('.calendar tbody');
const header = document.querySelector('.calendar-header');

function showCalendar(month, year) {
  const firstDay = (new Date(year, month)).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  calendar.innerHTML = '';

  // Create table rows
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    // Populate row with date cells
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      const day = (i * 7) + j - firstDay + 1;

      if (day > 0 && day <= daysInMonth) {
        cell.textContent = day;
        if (year === currentYear && month === currentMonth && day === currentDay) {
          cell.classList.add('today');
        }
      } else {
        cell.classList.add('disabled');
        cell.textContent = '';
      }

      row.appendChild(cell);
    }

    calendar.appendChild(row);
  }

  // Update header
  header.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
}

// Show current month's calendar on page load
showCalendar(new Date().getMonth(), new Date().getFullYear());
