import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery'; // Import jQuery
import baseUrl from '../../Api/baseUrl';
import { NotificationManager } from 'react-notifications';

const GetAllPatient = () => {
  const tableRef = useRef(null);
  const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
}
  useEffect(() => {
    const fetchData = async () => {
     
      const response = await baseUrl.post('/api/Patient/v1/GetAll/page/1/count/1000',{},config);
      const patients = response.data.data.patients;

      $(tableRef.current).DataTable({
        data: patients,
        columns: [
          { title: 'id', data: 'id' },
          { title: 'pasNumber', data: 'pasNumber' },
          { title: 'surname', data: 'surname' },
          { title: 'dateOfBirth', data: 'dateOfBirth' },
          { title: 'sexCode', data: 'sexCode' },
          { title: 'homeTelephoneNumber', data: 'homeTelephoneNumber' },
          {
            title: 'Actions',
            data: 'id',
            render: (data, type, row) => `<button class="btn btn-danger btn-sm remove-btn" data-id="${data}">Remove</button>`
          }
        ],
        paging: true, // Enable pagination
        pageLength: 2, // Number of records per page
        lengthMenu: [10, 25, 50, 75, 100], // Records per page options
      });

      $(tableRef.current).on('click', '.remove-btn', function () {
        const table = $(tableRef.current).DataTable();
        const row = $(this).closest('tr');
        const rowData = table.row(row).data();

        removeRow(rowData.id, table, row);
      });
     
    };

    fetchData();

    const removeRow = async (id, table, row) => {
      try {
      const _result= await baseUrl.post(`/api/Patient/v1/RemovePatientById/${id}`,{},config);
      if(_result.data.requestStatus===200){
        NotificationManager.success('Patient is delete  successfully', 'success!', 2000);
        table.row(row).remove().draw();
      }else{
        NotificationManager.error(_result.data.message, 'error!', 2000);
      }
        
      } catch (error) {
        NotificationManager.error('Server-error', 'error!', 2000);
      }
    };
    return () => {
      $(tableRef.current).DataTable().destroy(true);
    };
  }, []);

  return (
    <table ref={tableRef} className="table table-striped table-bordered"></table>
  );
};

export default GetAllPatient;
