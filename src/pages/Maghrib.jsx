// eslint-disable-next-line no-unused-vars
import React from "react";
import nameMemberArray from "../member";

export const Maghrib = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <div>
      <table border="2">
        <thead>
          <tr>
            <th rowSpan="2">NO</th>
            <th rowSpan="2">NAMA</th>
            <th colSpan="4" style={{ fontSize: "18px" }}>
              {formattedDate}
            </th>
          </tr>
          <tr>
            <th>H</th>
            <th>A</th>
            <th>S</th>
            <th>I</th>
          </tr>
        </thead>
        <tbody>
          {nameMemberArray.map((namaSiswa, index) => (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{namaSiswa}</td>
              <td>
                <input type="checkbox" id={`hCheckbox${index + 1}`} />
              </td>
              <td>
                <input type="checkbox" id={`aCheckbox${index + 1}`} />
              </td>
              <td>
                <input type="checkbox" id={`sCheckbox${index + 1}`} />
              </td>
              <td>
                <input type="checkbox" id={`iCheckbox${index + 1}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
