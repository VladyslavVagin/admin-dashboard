import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DatePicker } from "@mui/x-date-pickers";
import IconCalendar from "./IconCalendar/IconCalendar";

const DeliveryDate = ({ setDateValue }) => {
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

  return (
    <>
      <DatePicker
        label="Delivery Date"
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
                display: isOpen ? "none" : "visible",
              },
              ".MuiInputBase-root": {
                width: tablet ? "224px" : "295px",
                height: "40px",
                fontSize: "12px",
                lineHeight: "1.29",
                letterSpacing: "-0.03em",
                fontWeight: "500",
                transition: "var(--hover-effect)",
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
