import React, { PureComponent } from 'react';
import { Grid } from 'gridjs-react';
import "./css/test.css"
export default class Test extends React.Component {
   data: { Name: string; Email: string; }[];
   grid: Grid;
   constructor(props: any) {
      super(props);
      this.state = {};
      this.data = [
      ]
  
   }

   render() {
      return (
         <Grid
            data={[
               ['John', 'john@example.com'],
               ['Mike', 'mike@gmail.com']
            ]}
            columns={['Name', 'Email']}
            search={true}
            pagination={{
               enabled: true,
               limit: 30,
            }}
         />
      )
   }

}