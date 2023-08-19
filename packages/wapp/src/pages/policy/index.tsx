import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "./index.scss";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

const Login = () => {
  const [permission, setPermission] = useState(false);
  const handleLogin = () => {
    Taro.navigateTo({
      url: "/pages/home/index",
    });
  };
  useEffect(() => {}, []);
  return (
    <View className="policy-container">
      <Text className="text">XXXXXXX</Text>
      <Text className="text">
        // create new sheet with pageSetup settings for A4 - landscape const
        worksheet = workbook.addWorksheet('sheet', pageSetup:paperSize: 9,
        orientation:'landscape' ); // create a new sheet writer with pageSetup
        settings for fit-to-page const worksheetWriter =
        workbookWriter.addWorksheet('sheet', pageSetup:fitToPage: true,
        fitToHeight: 5, fitToWidth: 7 ); // adjust pageSetup settings afterwards
        worksheet.pageSetup.margins = left: 0.7, right: 0.7, top: 0.75, bottom:
        0.75, header: 0.3, footer: 0.3 ; // Set Print Area for a sheet
        worksheet.pageSetup.printArea = 'A1:G20'; // Set multiple Print Areas by
        separating print areas with '&&' worksheet.pageSetup.printArea =
        'A1:G10&&A11:G20'; // Repeat specific rows on every printed page
        worksheet.pageSetup.printTitlesRow = '1:3'; // Repeat specific columns
        on every printed page worksheet.pageSetup.printTitlesColumn = 'A:C';
      </Text>
    </View>
  );
};

export default Login;
