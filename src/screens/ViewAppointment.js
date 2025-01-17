import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker'; // For selecting the file

// Import PDF viewer library for rendering PDFs
import {PDF} from 'react-native-pdf';

const ViewAppointment = ({route, navigation}) => {
  const {appointment} = route.params;
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle downloading PDF (you can implement your own download logic)
  const handleDownload = () => {
    // Logic to download the PDF (can integrate with a download manager or cloud storage)
    setIsVisible(true);
    console.log('Download PDF functionality here!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Appointment Details</Text>

        {/* Doctor's Image */}
        <View style={styles.imageContainer}>
          <Image source={appointment.image} style={styles.doctorImage} />
        </View>

        {/* Appointment Details */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Doctor Name</Text>
          <Text style={styles.infoText}>{appointment.doctorName}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Specialization</Text>
          <Text style={styles.infoText}>{appointment.specialization}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.infoText}>{appointment.address}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.infoText}>{appointment.date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.infoText}>{appointment.timing}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Illness</Text>
          <Text style={styles.infoText}>{appointment.details.illness}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Medicine</Text>
          <Text style={styles.infoText}>{appointment.details.medicine}</Text>
        </View>

        {/* Display Prescription as PDF */}
        <View style={styles.pdfContainer}>
          <Text style={styles.label}>Prescription</Text>

          {/* <PDF
            source={{uri: appointment.details.prescriptionPDF, cache: true}}
            onLoadComplete={numberOfPages => {
              console.log(`Number of pages: ${numberOfPages}`);
            }}
            style={styles.pdfViewer}
          /> */}
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={handleDownload}>
            <Text style={styles.downloadButtonText}>View Prescription</Text>
          </TouchableOpacity>
        </View>

        {/* Book Again Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BookAppointment')}>
          <Text style={styles.buttonText}>Book Again</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ViewAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  pdfContainer: {
    marginVertical: 15,
  },
  pdfViewer: {
    height: 300,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    marginBottom: 10,
  },
  downloadButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: '#ff8c00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
