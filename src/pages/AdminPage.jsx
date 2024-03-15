import { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import { logout } from "../stores/AccessTokenStore";
import ApexCharts from 'apexcharts';
import AdminLayout from '../components/AdminLayout';

const AdminPage = () => {
    const handleLogout = () => {
        logout();
    };

    const chartOptions = {
        series: [{
            name: "Sales",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        }],
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                ],
            },
        },
    };

    // State per il nuovo grafico ApexChart
    const [apexChartOptions] = useState({
        series: [44, 55, 13, 33],
        chart: {
            width: 380,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
        }
    });

    useEffect(() => {
        const chart = new ApexCharts(document.querySelector("#apex-chart"), apexChartOptions);
        chart.render();
        return () => {
            chart.destroy();
        };
    }, [apexChartOptions]);

    return (
        <AdminLayout handleLogout={handleLogout}>
            <h1 className="admin-heading">Dashboard</h1>
            <div className="admin-chart">
                {/* Chart component for the existing chart */}
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="bar"
                    width={500}
                    height={320}
                />
                {/* ApexChart component */}
                <div id="apex-chart" className="apex-chart"></div>
            </div>
        </AdminLayout>
    );
};

export default AdminPage;

