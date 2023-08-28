const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const btn = document.querySelector('.btnn');
const error = document.querySelectorAll('.er');
const day_label = document.querySelector('.day_label');
const month_label = document.querySelector('.month_label');
const year_label = document.querySelector('.year_label');
const y_result = document.querySelector('.y_result');
const m_result = document.querySelector('.m_result');
const d_result = document.querySelector('.d_result');

let errorText = "";


btn.addEventListener('click', function() {
    const d_value = day.value;
const m_value = month.value;
const y_value = year.value;
error.forEach(function(el) {
        el.textContent = "";
      });
      if (d_value === "") {
    
        error[0].textContent = "this field is required";
        day_label.style.color ="hsl(0, 100%, 67%)";
    }
    if (m_value === "") {
        
        error[1].textContent = "this field is required";
        month_label.style.color ="hsl(0, 100%, 67%)";
    }
    if (y_value === "") {
        
        error[2].textContent = "this field is required";
        year_label.style.color ="hsl(0, 100%, 67%)";
    }
    
 else  {
       
     const date = new Date(y_value, m_value - 1, d_value)
    if(isNaN(date)) {
      error[0].textContent = 'Invalid date';
      error[1].textContent = 'Invalid date';
      error[2].textContent = 'Invalid date';
    } 
}
if (d_value < 1 || d_value > 31) {
    error[0].textContent = "invalid date";
}
if (m_value < 1 || m_value > 12) {
    error[1].textContent = "invalid month";
}
if (y_value > new Date().getFullYear()) {
    error[2].textContent = "Year must be in the past";
}
if (error[0].textContent === '' && error[1].textContent === ''&& error[2].textContent === '') {
    day_label.style.color ="hsl(0, 1%, 44%)";
    month_label.style.color ="hsl(0, 1%, 44%)";
    year_label.style.color ="hsl(0, 1%, 44%)";

    const today = new Date();
    const date = new Date(y_value, m_value - 1, d_value)

    const diff = today.getTime() - date.getTime(); 
    // add this condition to check if diff is positive or not
    if (diff < 0) {
        // display an error message if diff is negative
        error[3].textContent = "Date must be in the past";
    }
    else {
        // proceed with the calculation if diff is positive
        // divide by appropriate factors to get years, months, and days
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.436875));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        




        animateValue(y_result, 0, years, 1000)  
        animateValue(m_result, 0, months, 1000)
        animateValue(d_result, 0, days, 1000)
    }
    
}

})


function animateValue(div, start, end, duration) {

  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);  
    div.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}
