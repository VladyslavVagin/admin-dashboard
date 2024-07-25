// @ts-nocheck
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import IconCalendar from "./IconCalendar/IconCalendar";

const DeliveryDate = ({ setDateValue, dateValue }) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);

  const handleDatePicker = (newValue) => {
    const date = new Date(newValue?.$y, newValue?.$M, newValue?.$D);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDateValue(formattedDate);
    if(formattedDate) {
      setIsOpen(true);
    }
  };

  console.log(dayjs(dateValue).format("LL"));

  return (
    <>
      <DatePicker
        label="Delivery Date"
        defaultValue={dateValue && dayjs(dateValue)} 
        format="LL"
        onChange={handleDatePicker}
        onOpen={() => setIsOpen(true)}
        disableOpenPicker={false}
        slotProps={{
          textField: {
            size: "small",
            sx: {
              ".MuiInputBase-root.Mui-focused": {
                border: "1px solid var(--accent-color)",
              },
              ".MuiFormLabel-root": {
                fontSize: "12px",
                lineHeight: "1.33",
                letterSpacing: "-0.03em",
                fontWeight: "500",
                color: "var(--placeholder-color)",
                top: "4px",
                paddingLeft: "8px",
                display: isOpen || dateValue ? "none" : "visible",
              },
              ".MuiInputBase-root": {
                width: tablet ? "224px" : "295px",
                height: "40px",
                fontSize: "12px",
                lineHeight: "1.29",
                letterSpacing: "-0.03em",
                fontWeight: "500",
                transition: "var(--hover-effect)",
                paddingLeft: "8px",
                borderRadius: "30px",
                outline: "none",
                border: "1px solid var(--border-color)",
                "&:hover": {
                  border: "1px solid var(--accent-color)",
                  outline: "none",
                },
              },
            },
          },
          popper: {
            sx: {
              ".MuiPaper-root": { border: "1px solid var(--accent-color)" },
            },
          },
        }}
        views={["day", "month", "year"]}
        slots={{
          openPickerIcon: IconCalendar,
        }}
      />
    </>
  );
};

export default DeliveryDate;
