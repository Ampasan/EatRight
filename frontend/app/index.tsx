import React from 'react';
import { Redirect } from 'expo-router';
import "../global.css";

export default function Index() {
  return <Redirect href={'/(auth)/index'} />; // Redirect to the welcome page
};
