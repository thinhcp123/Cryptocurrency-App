import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Row, Col, Card, Input } from "antd";
import millify from 'millify'
import { Link } from 'react-router-dom'

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 12 : 100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return "Loading";
    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search Cryptocurrency"
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                    />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={currency.uuid}
                    >

                        {/* Note: Change currency.id to currency.uuid  */}
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} alt="cryto-img" />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>)
}

export default Cryptocurrencies