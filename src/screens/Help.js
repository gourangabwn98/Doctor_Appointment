import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';
import {ScrollView} from 'react-native-gesture-handler';

const Help = () => {
  const handleCall = number => {
    Linking.openURL(`tel:${number}`);
  };

  const handleSMS = number => {
    Linking.openURL(`sms:${number}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header icon={require('../Images/back.png')} title={'Help & Support'} />

      {/* Main Content */}
      <ScrollView>
        <View style={styles.content}>
          {/* Call Ambulance Section */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Call an Ambulance</Text>
            <Text style={styles.cardSubtitle}>
              For emergencies, call the ambulance helpline.
            </Text>
            <TouchableOpacity
              style={styles.callButton}
              onPress={() => handleCall('+911123456789')}>
              <Text style={styles.callButtonText}>Call Ambulance</Text>
            </TouchableOpacity>
          </View>

          {/* Book Doctor via Helpline */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Book a Doctor via Helpline</Text>
            <Text style={styles.cardSubtitle}>
              Call our helpline to book a doctor instantly.
            </Text>
            <TouchableOpacity
              style={styles.callButton}
              onPress={() => handleCall('+912233445566')}>
              <Text style={styles.callButtonText}>Call Doctor Helpline</Text>
            </TouchableOpacity>
          </View>

          {/* Report Problem Section */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Report a Problem</Text>
            <Text style={styles.cardSubtitle}>
              Call or send us a message to report any issues.
            </Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => handleCall('+918899776655')}>
                <Text style={styles.callButtonText}>Call Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.messageButton}
                onPress={() => handleSMS('+918899776655')}>
                <Text style={styles.messageButtonText}>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Image
            source={require('../Images/support.png')} // Add a suitable image for support
            style={styles.footerImage}
          />
          <Text style={styles.footerText}>
            Need immediate assistance? Contact our 24/7 support line for help.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  content: {
    marginTop: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  callButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButton: {
    backgroundColor: '#4A90E2',

    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  messageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  footerImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
