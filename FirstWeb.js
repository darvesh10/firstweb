
import { DatePicker } from 'antd';
import { useState } from 'react';
import moment from 'moment';
const { RangePicker } = DatePicker;


function FirstWeb() {

  const [dates, setDates] = useState([])
  console.log(dates)

  

  return (
    <><div className='title'><h1>REACT DATE RANGE PICKER</h1></div><div className='daterange'>
          <RangePicker
              onChange={(values) => {

                  setDates(values.map(item => {
                      return moment(item).format('DD-WW-MM-YYYY');
                  }));
              } } />
      </div></>
  );
}
export default FirstWeb;