import React from 'react';
import banner from "./banner.png"
import { Document,
    Page,
    View,
    Text,
    Link,
    Font,
    Image,
    StyleSheet,PDFViewer } from '@react-pdf/renderer';


export default function PDF(props) {
   
    const styles = StyleSheet.create({
      nss_text: {
        textAlign: "center",
        margin : 20,
        fontSize: "34px",
        color: "#2661a7",
        },

        ssipmt_text : {
          
          textAlign: "center",
          margin : 5,
          padding: 5,
          fontSize: "21px",
          color: "#be9e60",
        },
        certi_text:{
          textAlign: "center",
          margin : 30,
          fontSize: "22px",
          
        },
        context:{
          textAlign: "center",
          margin : 2,
          padding: 50,
          fontSize: "18px",
        },
        techer_incharge:{
          textAlign: "right",
          fontSize: "16px",
        },
        techer_name:{
          textAlign: "right",
          fontSize: "16px",
        },
        techer_deg:{
          paddingRight:10,
          textAlign: "right",
          fontSize: "14px",
        },
        
        auto_text:{
          position:"absolute",
          bottom:0,
          paddingLeft:20,
          fontSize: "11px",
        },
        techer:{
          paddingRight:10,
          position: "relative",
          top:"250",
        }
        ,
        pdfv:{
            width:"95%",
            height:"95vh"
        }
      });
      
      Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
      });

    return (
        <PDFViewer style={styles.pdfv}>
          <Document>
    <Page size="A4">
      <View>
      <Image src={banner} ></Image>
      <Text style={styles.nss_text}>National Service Scheme</Text>
        <Text style={styles.ssipmt_text}>Shri Shankaracharya Institute of Professional Management and Technology</Text>
        <Text style={styles.certi_text}>Provisional Certificate</Text>
        <Text style={styles.context}>This is to certify that {props.name} of Semester {props.sem} , {props.branch} Dept is enrolled as member for National Service Scheme in SSIPMT, Raipur.</Text>
      </View>
      <View style={styles.techer}>
        <Text style={styles.techer_name}>Mr. Anand Tamrakar​ </Text>
        <Text style={styles.techer_deg}>
        (Asst. Prof. , CSE)</Text>
        <Text style={styles.techer_incharge}>Teacher In-Charge</Text>
      </View>
      <Text style={styles.auto_text}>*This is  computer generated. (09-June-21)</Text>
    </Page>
  </Document>
  </PDFViewer>

    )
}
