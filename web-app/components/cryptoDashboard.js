import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import SearchBar from './searchBar';
import RefreshButton from './RefreshButton';

const fetchCryptoPrices = async () => {
    const {data} = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,solana,polkadot&vs_currencies=usd'
    );
    return data;
};


const CryptoDashboard = () => {
    const {data, isLoading, refetch} = useQuery({
        queryKey: ['cryptoPrices'],
        queryFn: fetchCryptoPrices,
        refetchInterval: 60000,//60s
        staleTime: 0,
        cacheTime: 0,
    });

    const [searchQuery, setSearchQuery] = useState('');

    if (isLoading){
        return <p className="loading">Loading prices...</p>
    }

    const filteredData = Object.entries(data).filter(([coin]) =>
    coin.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            <h1>Crypto Price Tracker</h1>
            <SearchBar onSearch={setSearchQuery}/>
            <ul className="crypto-list">
                {filteredData.map(([coin, price]) => (
                    <li key={coin} className="crypto-item">
                        {coin.toUpperCase()}: <span>${price.usd}</span>
                    </li>
                ))}
            </ul>
            <RefreshButton onClick={() => refetch({stale: true})}/>
        </div>
    );
};

export default CryptoDashboard;