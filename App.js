import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screen/LoginSignup/Login/Login";
import Signup_enter_email from "./src/Screen/LoginSignup/Signup/Signup_enter_email";
import Signup_Account_created from "./src/Screen/LoginSignup/Signup/Signup_Account_created";
import Signup_choose_user_name from "./src/Screen/LoginSignup/Signup/Signup_choose_user_name";
import Signup_chossepassword from "./src/Screen/LoginSignup/Signup/Signup_chossepassword";
import Signup_enter_verification_code from "./src/Screen/LoginSignup/Signup/Signup_enter_verification_code";
import Forgot_password_enter_verification_code from "./src/Screen/LoginSignup/ForgetPassword/Forgot_password_enter_verification_code";
import Forgotpassword_account_recoverd from "./src/Screen/LoginSignup/ForgetPassword/Forgotpassword_account_recoverd";
import Forgotpassword_choosePaaword from "./src/Screen/LoginSignup/ForgetPassword/Forgotpassword_choosePaaword";
import ForgotPassword_enter_email from "./src/Screen/LoginSignup/ForgetPassword/ForgotPassword_enter_email";
import MainPage from "./src/Screen/MainPage/MainPage";
import All_chats from "./src/Screen/ChatSection/All_chats";
import SearchUserPage from "./src/Screen/MainPage/SearchUserPage";
import MyUserProfile from "./src/Screen/Profile/MyUserProfile";
import NotificationPage from "./src/Screen/MainPage/NotificationPage";
import Settings from "./src/Settings/Settings";
import Changepassword from "./src/Settings/Changepassword";
import Editprofile from "./src/Settings/Editprofile";
import Changeusername from "./src/Settings/Changeusername";
import ChangeDescription from "./src/Settings/ChangeDescription";
import UploadProfilepicture from "./src/Settings/UploadProfilepicture";
import Addpost from "./src/Screen/MainPage/Addpost";
import OtherProfile from "./src/Screen/Profile/OtherProfile";
import Messagepage from "./src/Screen/ChatSection/Messagepage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        
        {/* Main Page  */}
        <Stack.Screen name="MainPage" component={MainPage} />

        <Stack.Screen name="Login" component={Login} /> 
        
        <Stack.Screen
          name="Signup_enter_email"
          component={Signup_enter_email}
        />
        <Stack.Screen
          name="Signup_Account_created"
          component={Signup_Account_created}
        />
        <Stack.Screen
          name="Signup_choose_user_name"
          component={Signup_choose_user_name}
        />
        <Stack.Screen
          name="Signup_chossepassword"
          component={Signup_chossepassword}
        />
        <Stack.Screen
          name="Signup_enter_verification_code"
          component={Signup_enter_verification_code}
        />

        {/* forgot Password  */}
        <Stack.Screen
          name="Forgot_password_enter_verification_code"
          component={Forgot_password_enter_verification_code}
        />
        <Stack.Screen
          name="Forgotpassword_account_recoverd"
          component={Forgotpassword_account_recoverd}
        />
        <Stack.Screen
          name="Forgotpassword_choosePaaword"
          component={Forgotpassword_choosePaaword}
        />
        <Stack.Screen
          name="ForgotPassword_enter_email"
          component={ForgotPassword_enter_email}
        />

        {/* the Chat Bar  */}
        <Stack.Screen
          name="All_Chats"
          options={{
            animation: "slide_from_bottom",
          }}
          component={All_chats}
        />

        <Stack.Screen
          name="SearchUserPage"
          options={{
            animation: "slide_from_bottom",
          }}
          component={SearchUserPage}
        />

        <Stack.Screen
          name="NotificationPage"
          options={{
            animation: "slide_from_bottom",
          }}
          component={NotificationPage}
        />

        <Stack.Screen
          name="MyUserProfile"
          options={{
            animation: "slide_from_bottom",
          }}
          component={MyUserProfile}
        />

        <Stack.Screen
          name="Settings"
          options={{
            animation: "slide_from_bottom",
          }}
          component={Settings}
        />

<Stack.Screen
          name="Changepassword"
          options={{
            animation: "slide_from_bottom",
          }}
          component={Changepassword}
        />

<Stack.Screen
          name="Editprofile"
          options={{
            animation: "slide_from_bottom",
          }}
          component={Editprofile}
        />

<Stack.Screen
          name="Changeusername"
          options={{
            animation: "slide_from_bottom",
          }}
          component={Changeusername}
        />

<Stack.Screen
          name="ChangeDescription"
          options={{
            animation: "slide_from_bottom",
          }}
          component={ChangeDescription}
        />

<Stack.Screen
          name="UploadProfilepicture"
          options={{
            animation: "slide_from_bottom",
          }}
          component={UploadProfilepicture}
        />

<Stack.Screen
          name="Addpost"
          options={{
            animation: "slide_from_bottom",
          }}
          component={Addpost}
        />

<Stack.Screen
          name="OtherProfile"
          options={{
            animation: "slide_from_bottom",
          }}
          component={OtherProfile}
        />

<Stack.Screen
          name="MessagePage"
          options={{
            animation: "slide_from_bottom",
          }}
          component={Messagepage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
