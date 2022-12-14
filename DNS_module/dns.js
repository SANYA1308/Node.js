//DNS module
import dns from 'dns';

dns.lookup('geekyshows.com', (error, address, family)=>{
    if(error) throw error;
    console.log(address);
    console.log(family);
});

dns.resolve('geekyshows.com', 'MX', (error, records)=>{
    if(error) throw error;
    console.log(records);
    
});
dns.resolve('geekyshows.com', 'NS', (error, records)=>{
    if(error) throw error;
    console.log(records);
    
});