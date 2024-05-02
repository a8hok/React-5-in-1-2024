import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  async function getPosts() {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${pagination.pageIndex + 1}&results=${
          pagination.pageSize
        }`
      );
      return response.data.results;
    } catch (error) {
      console.log("something went wrong");
      throw error;
    }
  }

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Users", pagination],
    queryFn: getPosts,
    refetchOnWindowFocus: false, // new tab api fetch disable
    placeholderData: keepPreviousData, // data jumbing
  });

  const resultLength = [10, 20, 30, 40];

  function handlePrevChange() {
    setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex - 1 }));
  }

  function handleNextChange() {
    setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }));
  }

  function goToPage(page) {
    setPagination((prev) => ({ ...prev, pageIndex: page - 1 }));
  }

  function handleResultPerPageChange(e) {
    setPagination((prev) => ({
      ...prev,
      pageSize: parseInt(e.target.value),
    }));
  }

  return (
    <>
      <div>
        <div
          style={{
            width: "500px",
            display: "flex",
            gap: "10px",
            justifyContent: "space-around",
            borderBottom: "1px solid black",
          }}
        >
          <span>FirstName</span>
          <span>Last Name</span>
          <span>Email</span>
        </div>
        <div>
          {users?.length > 0 &&
            users.map((user, index) => (
              <div
                key={index}
                style={{
                  width: "500px",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-around",
                }}
              >
                <p>{user.name.first}</p>
                <p>{user.name.last}</p>
                <p>{user.email}</p>
              </div>
            ))}
        </div>
        <div>
          <button
            onClick={() => handlePrevChange()}
            disabled={pagination.pageIndex === 0}
          >
            {"<<"}
          </button>
          <button
            onClick={() => handlePrevChange()}
            disabled={pagination.pageIndex === 0}
          >
            {"<"}
          </button>
          <button
            onClick={() => handleNextChange()}
            disabled={pagination.pageIndex >= 4}
          >
            {">"}
          </button>
          <button
            onClick={() => handleNextChange()}
            disabled={pagination.pageIndex >= 4}
          >
            {">>"}
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p> Page : &nbsp;&nbsp;&nbsp; </p>{" "}
          <p>{pagination.pageIndex + 1} of 5</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>GO TO Page: &nbsp;&nbsp;&nbsp;</p>
          <input
            type="number"
            max={5}
            value={pagination.pageIndex + 1}
            style={{ height: "20px", marginTop: "15px" }}
            onChange={(e) => goToPage(parseInt(e.target.value))}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>Result per Page: &nbsp;&nbsp;&nbsp;</p>
          <select
            style={{ height: "20px", marginTop: "15px" }}
            onChange={handleResultPerPageChange}
            value={pagination.pageSize}
          >
            {resultLength.map((length, index) => (
              <option key={index}>{length}</option>
            ))}
          </select>
        </div>
      </div>

      {isLoading && <h1>Loading...</h1>}

      {isError && <h1>Error</h1>}
    </>
  );
}

export default App;
