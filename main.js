//Bài 1:
var outputBai1 = document.querySelector(".bai1 .btn");
outputBai1.onclick = () => {
  const input_bai1 = document.querySelector("#input_bai1").value;
  let time_input = new Date(input_bai1).getTime();
  const dom_next_day = document.querySelector(".next_day");
  const dom_prev_day = document.querySelector(".prev_day");
  const next_day = new Date(time_input + 24000 * 3600).toLocaleDateString("vi");
  const prev_day = new Date(time_input - 24000 * 3600).toLocaleDateString("vi");
  dom_next_day.innerHTML = "Next day: " + next_day;
  dom_prev_day.innerHTML = "Prev day: " + prev_day;
};
//Bài 2:
var outputBai2 = document.querySelector(".bai2 .btn");
outputBai2.onclick = () => {
  const month_bai2 = document.querySelector("#month_bai2").value * 1;
  const year_bai2 = document.querySelector("#year_bai2").value * 1;
  const output = document.querySelector(".bai2 .bg-dark");

  if (
    month_bai2 === 4 ||
    month_bai2 === 6 ||
    month_bai2 === 9 ||
    month_bai2 === 11
  ) {
    output.innerHTML = "Số ngày trong tháng là 30.";
  } else {
    output.innerHTML = "Số ngày trong tháng là 31.";
  }
  if (month_bai2 === 2) {
    year_bai2 % 4 === 0
      ? (output.innerHTML = "Số ngày trong tháng là 29.")
      : (output.innerHTML = "Số ngày trong tháng là 28.");
  }
};
// Bài 3:
var outputBai3 = document.querySelector(".bai3 .btn");
outputBai3.onclick = () => {
  const input_bai3 = document.querySelector("#input_bai3").value * 1;
  const SoHangTram = Math.trunc(input_bai3 / 100);
  let CachDoc_SoHangTram = "";
  switch (SoHangTram) {
    case 1: {
      CachDoc_SoHangTram = "Một trăm ";
      break;
    }
    case 2: {
      CachDoc_SoHangTram = "Hai trăm ";
      break;
    }
    case 3: {
      CachDoc_SoHangTram = "Ba trăm ";
      break;
    }
    case 4: {
      CachDoc_SoHangTram = "Bốn trăm ";
      break;
    }
    case 5: {
      CachDoc_SoHangTram = "Năm trăm ";
      break;
    }
    case 6: {
      CachDoc_SoHangTram = "Sáu trăm ";
      break;
    }
    case 7: {
      CachDoc_SoHangTram = "Bảy trăm ";
      break;
    }
    case 8: {
      CachDoc_SoHangTram = "Tám trăm ";
      break;
    }
    case 9: {
      CachDoc_SoHangTram = "Chín trăm";
      break;
    }
    default:
      CachDoc_SoHangTram;
  }

  const SoHangChuc = Math.trunc((input_bai3 - SoHangTram * 100) / 10);
  let CachDoc_SoHangChuc;
  switch (SoHangChuc) {
    case 1:
      CachDoc_SoHangChuc = "mười ";
      break;
    case 2:
      CachDoc_SoHangChuc = "hai mươi ";
      break;
    case 3:
      CachDoc_SoHangChuc = "ba mươi ";
      break;
    case 4:
      CachDoc_SoHangChuc = "bốn mươi ";
      break;
    case 5:
      CachDoc_SoHangChuc = "năm mươi ";
      break;
    case 6:
      CachDoc_SoHangChuc = "sáu mươi ";
      break;
    case 7:
      CachDoc_SoHangChuc = "bảy mươi ";
      break;
    case 8:
      CachDoc_SoHangChuc = "tám mươi ";
      break;
    case 9:
      CachDoc_SoHangChuc = "chín mươi ";
      break;
    case 0:
      CachDoc_SoHangChuc = "lẻ ";
      break;
  }

  const SohangDonVi = input_bai3 % 10;
  let CachDoc_HangDonVi;
  switch (SohangDonVi) {
    case 1:
      SoHangChuc === 0
        ? (CachDoc_HangDonVi = "một")
        : (CachDoc_HangDonVi = "mốt ");
      break;
    case 2:
      CachDoc_HangDonVi = "hai ";
      break;
    case 3:
      CachDoc_HangDonVi = "ba ";
      break;
    case 4:
      CachDoc_HangDonVi = "bốn ";
      break;
    case 5:
      SoHangChuc === 0
        ? (CachDoc_HangDonVi = "năm ")
        : (CachDoc_HangDonVi = "lăm ");
      break;
    case 6:
      CachDoc_HangDonVi = "sáu ";
      break;
    case 7:
      CachDoc_HangDonVi = "bảy ";
      break;
    case 8:
      CachDoc_HangDonVi = "tám ";
      break;
    case 9:
      CachDoc_HangDonVi = "chín ";
      break;
  }

  const output = document.querySelector(".bai3 .bg-dark");
  output.innerHTML =
    "Output: " +
    CachDoc_SoHangTram +
    " " +
    CachDoc_SoHangChuc +
    CachDoc_HangDonVi;
};
//Bài 4:
var outputBai4 = document.querySelector(".bai4 .btn");
outputBai4.onclick = () => {
  const name_student1 = document.querySelector("#name_student1").value;
  const name_student2 = document.querySelector("#name_student2").value;
  const name_student3 = document.querySelector("#name_student3").value;

  const toado_x_student1 =
    document.querySelector("#toado_x_student1").value * 1;
  const toado_y_student1 =
    document.querySelector("#toado_y_student1").value * 1;

  const toado_x_student2 =
    document.querySelector("#toado_x_student2").value * 1;
  const toado_y_student2 =
    document.querySelector("#toado_y_student2").value * 1;

  const toado_x_student3 =
    document.querySelector("#toado_x_student3").value * 1;
  const toado_y_student3 =
    document.querySelector("#toado_y_student3").value * 1;

  const toado_university = "(x,y)=(1,1)";
  const output = document.querySelector(".bai4 .bg-dark");

  const distance_student1 =
    (toado_x_student1 - 1) * (toado_x_student1 - 1) +
    (toado_y_student1 - 1) * (toado_y_student1 - 1);
  const distance_student2 =
    (toado_x_student2 - 1) * (toado_x_student2 - 1) +
    (toado_y_student2 - 1) * (toado_y_student2 - 1);
  const distance_student3 =
    (toado_x_student3 - 1) * (toado_x_student3 - 1) +
    (toado_y_student3 - 1) * (toado_y_student3 - 1);
  if (
    distance_student1 >= distance_student2 &&
    distance_student1 >= distance_student3
  ) {
    output.innerHTML = ` Output: Sinh viên "${name_student1}" xa trường nhất!`;
  }
  if (
    distance_student2 >= distance_student1 &&
    distance_student2 >= distance_student3
  ) {
    output.innerHTML = ` Output: Sinh viên "${name_student2}" xa trường nhất!`;
  }
  if (
    distance_student3 >= distance_student1 &&
    distance_student3 >= distance_student2
  ) {
    output.innerHTML = ` Output: Sinh viên "${name_student3}" xa trường nhất!`;
  }
};
