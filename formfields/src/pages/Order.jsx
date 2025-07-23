import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TransferOrder = () => {
    const [officerName, setOfficerName] = useState("________");
    // const [loading, setLoading] = useState(false);

    const fetchOfficerName = async () => {
        // setLoading(true);
        try {
            const payload = {
                proposal_id: 201028,
                lang_cd: 99,
            };
            const response = await axios.post(
                "http://localhost:8080/api/getOfficer",
                payload
            );
            const name = response.data?.officer_name || "________";
            setOfficerName(name);
        } catch (error) {
            console.log(error);
            
        } finally {
            // setLoading(false);
        }
    };

    const downloadPDF = () => {
        const element = document.getElementById("pdf-content");
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("transfer_order.pdf");
        });
    };

    return (
        <div style={{ padding: 20 }}>
            <button onClick={fetchOfficerName}>ऑफिसर नाम लाओ</button>
            <button onClick={downloadPDF} style={{ marginLeft: 10 }}>
                डाउनलोड PDF
            </button>

            <div
                id="pdf-content"
                style={{
                    width: "800px",
                    margin: "20px auto",
                    padding: "30px",
                    fontFamily: "serif",
                    border: "1px solid black",
                    backgroundColor: "#fff",
                }}>
                <div style={{ textAlign: "center" }}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Rajasthan_Police_Logo.png/150px-Rajasthan_Police_Logo.png"
                        alt="logo"
                        style={{ height: "80px" }}
                    />
                    <h3 style={{ margin: 0 }}>
                        कार्यालय पुलिस महानिदेशक, राजस्थान, जयपुर
                    </h3>
                </div>

                <p style={{ marginTop: "20px" }}>
                    <strong>क्रमांक:</strong> स्था/आदेश/2025/12345
                </p>
                <h2
                    style={{
                        textAlign: "center",
                        textDecoration: "underline",
                    }}>
                    आदेश
                </h2>

                <p>
                    श्रीमान <strong>{officerName}</strong> को स्थानांतरित कर,
                    आगामी आदेश तक पुलिस थाना, जयपुर (उत्तर) में पदस्थापित किया
                    जाता है।
                </p>

                <p>
                    यह आदेश तत्काल प्रभाव से लागू होगा और संबंधित अधिकारी को
                    निर्देशित किया जाता है कि वह नवीन पदस्थापना स्थल पर शीघ्र
                    कार्यभार ग्रहण करें।
                </p>

                <p style={{ marginTop: "60px" }}>
                    आदेशानुसार,
                    <br />
                    पुलिस महानिदेशक, राजस्थान
                    <br />
                    दिनांक: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default TransferOrder;
