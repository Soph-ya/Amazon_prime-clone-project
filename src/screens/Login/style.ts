import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

login: {
  marginTop: -100,
  paddingTop: -100,
},

  loginText: {
    fontSize: 40,
    fontWeight: "700",
    color: '#ffffff'
  },

  passwordText: {
    color: '#399EEE',
    margin: 10,
    textAlign:"right",   

  },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#141920'
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
      },

      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      showPasswordButton: {
        marginLeft: 10,
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },

      checkboxText: {
        marginLeft: 10,
        color: '#DDDDDD',
      },

      loginButtonText: {
        color: 'white',
        fontSize: 16,
      },

      useTerms: {
        color: '#595959',
        textAlign: "justify",
        fontSize: 16,
        margin: 10,

      },

      textBox: {
        color: '#FFFFFF',
        textAlign: "center",
        fontSize: 16,
        margin: 10,
        padding: 8,

        
      },

      creditFooter: {

        color: '#595959',
        textAlign: "center",
        fontSize: 16,
        marginTop: 100,

      }
})