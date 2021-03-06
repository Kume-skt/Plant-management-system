import React, { PureComponent } from 'react';

import { Grid } from 'gridjs-react';
import '../page/css/gridjs.css';

interface get_data {
  plant_Data: any;
}
export default class DataTable extends React.Component<get_data, any> {
  planttableData: any;
  constructor(props: any) {
    super(props);
    this.state = {};
    this.planttableData = [];
  }
  componentWillReceiveProps(nextpro: any) {
    const test = Object.values(nextpro.plant_Data).map((data) => {
      return data;
    });
    const testa = test.map((data: any) =>
      Object.values(data).map((d: any) => {
        return d;
      })
    );
    this.planttableData = testa;
  }
  render() {
    return (
      <Grid
        data={this.planttableData}
        columns={[
          'DATE',
          'soil_value',
          'water',
          'tds',
          'humidity',
          'Temperature',
          'HeatIndex',
        ]}
        search={true}
        sort={true}
        fixedHeader={true}
        pagination={{
          enabled: true,
          limit: 30,
        }}
      />
    );
  }
}
