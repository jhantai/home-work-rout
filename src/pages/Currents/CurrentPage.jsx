import React, {useEffect, useState} from 'react';
import './CurrentPage.css'
import axios from "axios";

const CurrentPage = () => {

    const token = 'MIC2wZtFA16XoNUCoMbZMxMdG8T7mTq9mmlKzLgO9e36a8fb'
    const [data, setData] = useState([])
    console.log(data)
    const [isLoading, setIsLoading] = useState(false)

    const getCurrent = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('https://data.fx.kg/api/v1/current', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            let filteredData = response.data
           filteredData = filteredData.filter(item => item.id < 16)
            setData(filteredData)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getCurrent()
    }, [])

    return (
        <div>
            <h2>Курс валют</h2>
            <div className="tittles">

            <h2>Банк</h2>
            <h2>Покупка</h2>
            <h2>Продажа</h2>
            </div>
            { isLoading ?
                <div>Loading...</div>
                :
                <div>
                    {data.map(    (item, idx) => {
                        return (
                            <div key={idx}>
                                <table className='current-wrap'>

                                    <li>{item.title}</li>
                                    <li>{item.rates[0].buy_usd}</li>
                                    <li>{item.rates[0].buy_rub}</li>
                                </table>
                            </div>
                        )
                    })  }
                </div>
            }
        </div>
    );
};

export default CurrentPage;