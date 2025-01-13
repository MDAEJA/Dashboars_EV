import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // For Approved
import CancelIcon from '@mui/icons-material/Cancel'; // For Reject
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'; // For Pending

function OrderTable() {
  const orders = [
    { trackingNo: '12345', productName: 'Product A', totalOrder: 10, status: 'Approved', totalAmount: '$500' },
    { trackingNo: '67890', productName: 'Product B', totalOrder: 5, status: 'Pending', totalAmount: '$250' },
    { trackingNo: '11223', productName: 'Product C', totalOrder: 3, status: 'Reject', totalAmount: '$150' },
    { trackingNo: '44556', productName: 'Product D', totalOrder: 7, status: 'Approved', totalAmount: '$350' },
    { trackingNo: '78901', productName: 'Product E', totalOrder: 12, status: 'Pending', totalAmount: '$600' },
  ];

  const getStatusIcon = (status) => {
    if (status === 'Approved') return <CheckCircleIcon className="text-green-500" />;
    if (status === 'Reject') return <CancelIcon className="text-red-500" />;
    if (status === 'Pending') return <HourglassEmptyIcon className="text-orange-500" />;
    return null;
  };

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 overflow-x-auto shadow-lg rounded-lg border border-gray-200 ">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left border-b border-gray-300">Tracking No.</th>
            <th className="px-4 py-2 text-left border-b border-gray-300">Product Name</th>
            <th className="px-4 py-2 text-left border-b border-gray-300">Total Order</th>
            <th className="px-4 py-2 text-left border-b border-gray-300">Status</th>
            <th className="px-4 py-2 text-left border-b border-gray-300">Total Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {orders.map((order) => (
            <tr key={order.trackingNo} className="border-b border-gray-200">
              <td className="px-4 py-2">{order.trackingNo}</td>
              <td className="px-4 py-2">{order.productName}</td>
              <td className="px-4 py-2">{order.totalOrder}</td>
              <td className="px-4 py-2 flex items-center space-x-2">
                {/* Status Icon */}
                {getStatusIcon(order.status)}
                <span>{order.status}</span>
              </td>
              <td className="px-4 py-2">{order.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;
