export default function Result() {
  return (
    <div>
      <div style={{ backgroundColor: "#B8E4E0" }}>
        <div
          style={{ backgroundColor: "#12A596", marginBlockEnd: "10px" }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            background: "#12A596",
          }}
        >
          <h1
            style={{
              color: "white",
              margin: "30px",
              fontSize: "48px",
              marginLeft: "45px",
            }}
          >
            {" "}
            db helper{" "}
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "50px",
          fontSize: "36px",
        }}
      >
        ผลการทดสอบความเสี่ยง
      </div>
      <div
        style={{
          backgroundColor: "#FF8484",
          marginLeft: "600px",
          marginRight: "600px",
          marginBlockEnd: "20px",
          marginTop: "50px",
          paddingBlockEnd: "90px",
          paddingTop: "30px",
        }}
      >
        <h1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "36px",
          }}
        >
          คะแนนของคุณ
        </h1>
        <p1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "150px",
          }}
        >
          9
        </p1>
      </div>
      <div
        style={{
          backgroundColor: "#FF5151",
          marginLeft: "600px",
          marginRight: "600px",
          marginBlockEnd: "20px",
          marginTop: "50px",
          paddingBlockEnd: "90px",
          paddingTop: "30px",
        }}
      >
        <h1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "48px",
            color: "white",
          }}
        >
          ระดับความเสี่ยงสูงมาก
        </h1>
        <p1
          style={{
            display: "flex",
            flexDirection: "colunm",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "36px",
          }}
        >
          * คะแนนรวมมากกว่า 8 *
        </p1>
      </div>
      <div></div>
    </div>
  );
}
