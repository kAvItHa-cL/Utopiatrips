using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using Utopia_Trips.Models;

namespace Utopia_Trips.Dal
{
    public class PaymentResponseDal
    {
        //internal int GetPaymentDetails(string id)
        //{
        //    string url = "https://www.instamojo.com/api/1.1/payment-requests/{0}";

        //    HttpWebRequest client = HttpWebRequest.Create(string.Format(url, id)) as HttpWebRequest;
        //    client.Method = "GET";
        //    client.ContentType = "application/json; odata=verbose";
        //    client.Accept = "application/json; odata=verbose";
        //    client.Headers.Add("X-Api-Key", "a2e7fef9ac2ced3a56b7cd03036abedf");
        //    client.Headers.Add("X-Auth-Token", "7I8bL4glbB4oVBnwUEkS0NBPpFRyC6Yw8TvhID7LXZeCAFLfjYvaN2iGj2Z13emD1OgxfT7SKNr5lEzoOQiSKAvX57PiCGIGtdSvYD6vAjdnPG5e1CDAqGovJ1DoAeIL");
        //    HttpWebResponse PaymentResponse = client.GetResponse() as HttpWebResponse;
        //    //returns a single jArray row
        //    dynamic resp = JsonConvert.DeserializeObject(
        //        new StreamReader(client.GetResponse().GetResponseStream()).ReadToEnd());
        //    //Payment_Response

        //    Payment_Response result = JsonConvert.DeserializeObject<Payment_Response>(resp["payment_request"]);
        //    if (result.success)
        //        return 1;
        //    else
        //        return 0;
        //}
    }
}