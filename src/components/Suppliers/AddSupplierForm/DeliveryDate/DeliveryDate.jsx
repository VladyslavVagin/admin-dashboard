import React from "react";
import { useMediaQuery } from "react-responsive";
import { DatePicker } from "@mui/x-date-pickers";
import IconCalendar from "./IconCalendar/IconCalendar";

const DeliveryDate = ({ setDateValue }) => {
  const tablet = useMediaQuery({ minWidth: 768 });

  const handleDatePicker = (newValue) => {
    const date = new Date(newValue.$y, newValue.$M, newValue.$D);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDateValue(formattedDate);
  };

  return (
    <>
      <DatePicker
        label="Delivery Date"
        format="LL"
        onChange={handleDatePicker}
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
              },
              ".MuiInputBase-root": {
                width: tablet ? "224px" : "144px",
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
