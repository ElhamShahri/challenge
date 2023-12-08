import React from "react";
// import moment from "jalali-moment";

const convertHelpers = {

  dateConvert: function (dateStr) {
    const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
  },

  // jalali: function (gregorianDate: string) {
  //   // format('jYYYY/jMM/jDD HH:mm:ss');

  // //   const utcDate = moment.utc(gregorianDate, 'YYYY-MM-DDTHH:mm:ss.SSZ');
  // // const jalaliDate = moment(utcDate).local().format('jYYYY/jMM/jDD');
  //   return jalaliDate;

  // },


};
export default convertHelpers;
