
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [first, setFirst] = useState(0);
  const [rows] = useState(10);

  useEffect(() => {
      const fetchDummyData = async () => {
          const dummyData = [...Array(6000).keys()].map((i) => ({
              id: i + 1,
              name: `User ${i + 1}`,
              mobile: `999999${i.toString().padStart(4, "0")}`,
              caste: i % 2 === 0 ? "General" : "OBC",
          }));

          setAllData(dummyData);
          setFilteredData(dummyData);
      };

      fetchDummyData();
  }, []);

  const handleSearch = (value) => {
      setSearchTerm(value);
      const lowerValue = value.toLowerCase();
      const filtered = allData.filter(
          (item) =>
              item?.name?.toLowerCase().includes(lowerValue) ||
              item?.mobile?.toLowerCase().includes(lowerValue) ||
              item?.caste?.toLowerCase().includes(lowerValue)
      );
      setFilteredData(filtered);
      setFirst(0); // Reset to first page on search
  };

  const onPageChange = (e) => {
      setFirst(e.first);
  };

  const currentRecords = filteredData.slice(first, first + rows);

  return (
      <div className="p-4">
          <InputText
              placeholder="Search by name, mobile, caste"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full mb-4"
          />

          <DataTable
              value={currentRecords}
              paginator={false}
              responsiveLayout="scroll">
              <Column
                  header="#"
                  body={(_, { rowIndex }) => first + rowIndex + 1}
              />
              <Column field="name" header="Name" />
              <Column field="mobile" header="Mobile" />
              <Column field="caste" header="Caste" />
          </DataTable>

          <Paginator
              first={first}
              rows={rows}
              totalRecords={filteredData.length}
              onPageChange={onPageChange}
              className="mt-4"
          />
      </div>
  );
}

export default App
