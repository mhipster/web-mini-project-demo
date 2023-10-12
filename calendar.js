const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  todayBtn = document.querySelector(".today-btn");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// get current date
const date = new Date();

// get current month
let currentMonth = date.getMonth();

// get current year
let currentYear = date.getFullYear();

// function to render days
function renderCalendar() {
  // get prev month current month and next month days
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  // update current year and month in header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // update days html
  let days = "";

  // prev days html
  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // current month days
  for (let i = 1; i <= lastDayDate; i++) {
    // check if its today then add today class
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      // if date month year matches add today
      days += `<div class="day today">${i}</div>`;
    } else {
      //else dont add today
      days += `<div class="day ">${i}</div>`;
    }
  }

  // next MOnth days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  // run this function with every calendar render
  hideTodayBtn();
  daysContainer.innerHTML = days;
}

renderCalendar();

nextBtn.addEventListener("click", () => {
  // increase current month by one
  currentMonth++;
  if (currentMonth > 11) {
    // if month gets greater that 11 make it 0 and increase year by one
    currentMonth = 0;
    currentYear++;
  }
  // rerender calendar
  renderCalendar();
});

// prev monyh btn
prevBtn.addEventListener("click", () => {
  // increase by one
  currentMonth--;
  // check if let than 0 then make it 11 and deacrease year
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// go to today
todayBtn.addEventListener("click", () => {
  // set month and year to current
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  // rerender calendar
  renderCalendar();
});

// lets hide today btn if its already current month and vice versa

function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}

// แนบอีเวนต์คลิกในการสร้าง / ยกเลิกคลาส "active"
daysContainer.addEventListener("click", (event) => {
    const clickedDay = event.target;
    
    if (clickedDay.classList.contains("day")) {
      // ลบคลาส "active" จากวันที่มีคลาส "active" อยู่
      const activeDay = document.querySelector(".day.active");
      if (activeDay) {
        activeDay.classList.remove("active");
      }
  
      // เพิ่มคลาส "active" ลงในวันที่คลิก
      clickedDay.classList.add("active");
    }
});

// ...

const selectedDateSpan = document.getElementById("selectedDate");

// ...

function updateSelectedDate() {
  const activeDay = document.querySelector(".day.active");
  if (activeDay) {
    const dayNumber = activeDay.textContent;
    const selectedDateString = `${months[currentMonth]} ${dayNumber}, ${currentYear}`;
    selectedDateSpan.textContent = selectedDateString;
  } else {
    selectedDateSpan.textContent = "No date selected";
  }
}

// แนบอีเวนต์คลิกในการสร้าง / ยกเลิกคลาส "active"
daysContainer.addEventListener("click", (event) => {
  const clickedDay = event.target;

  if (clickedDay.classList.contains("day")) {
    // ลบคลาส "active" จากวันที่มีคลาส "active" อยู่
    const activeDay = document.querySelector(".day.active");
    if (activeDay) {
      activeDay.classList.remove("active");
    }

    // เพิ่มคลาส "active" ลงในวันที่คลิก
    clickedDay.classList.add("active");

    // อัปเดตวันที่ถูกเลือก
    updateSelectedDate();
  }
});

// select time
const timeElements = document.querySelectorAll('.time');
let selectedTimes = []; // เก็บเวลาที่ถูกเลือก

const selectedTimesDisplay = document.getElementById('selectedTimesDisplay');
timeElements.forEach(timeElement => {
    timeElement.addEventListener('click', () => {
        // เช็คว่าเวลานี้ถูกเลือกไปแล้วหรือไม่
        const index = selectedTimes.indexOf(timeElement.textContent);
        if (index === -1) {
            // ถ้ายังไม่เลือก, เพิ่มเวลานั้นเข้าไปในรายการที่เลือก
            selectedTimes.push(timeElement.textContent);
            timeElement.classList.add('active-time');
        } else {
            // ถ้าเลือกแล้ว, ลบออกจากรายการที่เลือก
            selectedTimes.splice(index, 1);
            timeElement.classList.remove('active-time');
        }
        // แสดงรายการเวลาที่ถูกเลือกใน HTML
        selectedTimesDisplay.innerHTML = ` ${selectedTimes.join(', ')}`;
    });
    
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedItemsDisplay = document.getElementById("selectedItemsDisplay");

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        const selectedItems = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextElementSibling.textContent.trim());

        selectedItemsDisplay.textContent = selectedItems.join(", ");
    });
});
