// @ts-nocheck
import styled from "@emotion/styled";

export const Status = styled.span`
 display: flex;
 align-items: center;
 justify-content: center;
 color: ${({ status }) => status === "Active" ? "var(--accent-color)" : "var(--expense-color)"};
 background: ${({ status }) => status === "Active" ? "var(--income-bg)" : "var(--expense-bg)"};
 font-size: 14px;
 font-weight: 500;
 letter-spacing: -0.05em;
 height: 25px;
 border-radius: 60px;
 min-width: 89px;
 max-width: 89px;
 margin: 0 auto;
`