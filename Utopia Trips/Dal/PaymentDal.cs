using InstamojoAPI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using Utopia_Trips.Models;

namespace Utopia_Trips.Dal
{
    public class PaymentDal
    {
        public string Payment(PaymentModel objmodel)
        {
            string Insta_client_id = "dpcYyygkuivQPQJgVtgsvC3BJszm33dNjvDyaG05",
             Insta_client_secret = "7I8bL4glbB4oVBnwUEkS0NBPpFRyC6Yw8TvhID7LXZeCAFLfjYvaN2iGj2Z13emD1OgxfT7SKNr5lEzoOQiSKAvX57PiCGIGtdSvYD6vAjdnPG5e1CDAqGovJ1DoAeIL",
             Insta_Endpoint = InstamojoConstants.INSTAMOJO_API_ENDPOINT,
             Insta_Auth_Endpoint = InstamojoConstants.INSTAMOJO_AUTH_ENDPOINT;
            Instamojo objClass = InstamojoImplementation.getApi(Insta_client_id, Insta_client_secret, Insta_Endpoint, Insta_Auth_Endpoint);
            return CreatePaymentOrder(objClass, objmodel);
        }

        private string CreatePaymentOrder(Instamojo objClass, PaymentModel model)
        {
            PaymentOrder objPaymentRequest = new PaymentOrder();
            //Required POST parameters
            objPaymentRequest.name = model.LastName;
            objPaymentRequest.email = model.Email;
            objPaymentRequest.phone = model.Phone;
            objPaymentRequest.description = model.Description;
            objPaymentRequest.amount = Convert.ToDouble(model.Total);
            objPaymentRequest.currency = "INR";

            string randomName = Path.GetRandomFileName();
            randomName = randomName.Replace(".", string.Empty);
            objPaymentRequest.transaction_id = "utopiatrips" + randomName;

            objPaymentRequest.redirect_url = "http://sit01.utopiatrips.com/PaymentConfirmation/Confirmation";
            objPaymentRequest.webhook_url = "http://sit01.utopiatrips.com/PaymentConfirmation/Confirmation";
            //Extra POST parameters 

            if (objPaymentRequest.validate())
            {
                if (objPaymentRequest.emailInvalid)
                {
                    return "Error";
                }
                if (objPaymentRequest.nameInvalid)
                {
                    return "Error";
                }
                if (objPaymentRequest.phoneInvalid)
                {
                    return "Error";
                }
                if (objPaymentRequest.amountInvalid)
                {
                    return "Error";
                }
                if (objPaymentRequest.currencyInvalid)
                {
                    return "Error";
                }
                if (objPaymentRequest.transactionIdInvalid)
                {
                    return "Error";
                }
                if (objPaymentRequest.redirectUrlInvalid)
                {
                    return "Error";
                }
                if (objPaymentRequest.webhookUrlInvalid)
                {
                    return "Error";
                }

            }
            else
            {
                try
                {
                    CreatePaymentOrderResponse objPaymentResponse = objClass.createNewPaymentRequest(objPaymentRequest);
                    //MessageBox.Show("Payment URL = " + objPaymentResponse.payment_options.payment_url);
                    return objPaymentResponse.payment_options.payment_url;
                }
                catch (ArgumentNullException ex)
                {
                    return "Error";
                }
                catch (WebException ex)
                {
                    return "Error";
                }
                catch (IOException ex)
                {
                    return "Error";
                }
                catch (InvalidPaymentOrderException ex)
                {
                    if (!ex.IsWebhookValid())
                    {
                        return "Error";
                    }

                    if (!ex.IsCurrencyValid())
                    {
                        return "Error";
                    }

                    if (!ex.IsTransactionIDValid())
                    {
                        return "Error";
                    }
                }
                catch (ConnectionException ex)
                {
                    return "Error";
                }
                catch (BaseException ex)
                {
                    return "Error";
                }
                catch (Exception ex)
                {
                    return "Error";
                }
            }
            return "Error!";
        }
    }
}