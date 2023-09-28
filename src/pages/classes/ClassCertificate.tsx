import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { format } from "date-fns";
import es from "date-fns/locale/es";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingTop: "20mm",
    paddingBottom: "20mm",
    paddingLeft: "30mm",
    paddingRight: "30mm",
    flexDirection: "row",
  },
  section: {
    textAlign: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 50,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#3f9cc0", // Cambia el color a tu preferencia
  },
  date: {
    fontSize: 20,
  },
});
// Componente que representa el certificado
const Certificate = ({
  userName,
  courseName,
}: {
  userName: String;
  courseName: String;
}) => {
  const formattedDate = format(new Date(), "d 'de' MMMM 'de' yyyy", {
    locale: es,
  });
  return (
    <Document>
      <Page size="A4" orientation={"landscape"} style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.subtitle}>{"</>"}Home of Code</Text>
          <div>
            <Text style={styles.text}>Certificado de finalizacion</Text>
            <Text style={styles.title}>{courseName}</Text>
          </div>
          <div>
            <Text style={styles.name}>{userName}</Text>
            <Text style={styles.date}>Fecha: {formattedDate}</Text>
          </div>
        </View>
      </Page>
    </Document>
  );
};

// En tu componente principal, renderiza el certificado en un PDFViewer
const CertificateViewer = ({
  userName,
  courseName,
}: {
  userName: String;
  courseName: String;
}) => (
  <PDFViewer style={{ width: "100%", height: "80vh" }}>
    <Certificate userName={userName} courseName={courseName} />
  </PDFViewer>
);

export default CertificateViewer;
