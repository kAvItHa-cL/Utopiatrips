using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Utopia_Trips.Models;

namespace Utopia_Trips.Dal
{
    public class WishListDal
    {
        //SqlConnection connection = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=D:\Utopiatrips\Working Version\Utopia Trips\Utopia Trips\App_Data\Utopiatrip.mdf;Integrated Security=True");
        SqlConnection connection = new SqlConnection(@"Data Source=43.255.152.21;Initial Catalog=Karthik_Ddbtest;User ID=Karthik2487;Password=Karthik123");

        internal string AddToWishList(WishListModel model)
        {
            try
            {
                int flag = GetEvent(model.EmailId, model.EventId);

                if (flag <= 0)
                {
                    DateTime da = DateTime.Now;
                    string Query = "Insert into WishList(EventId,EventTitle,Date,EmailId,Image,Price,Description,Status,Url) " +
                        "VALUES(@EventId,@EventTitle,@Date,@EmailId,@Image,@Price,@Description,@Status,@Url)";
                    connection.Open();
                    SqlCommand cmd = new SqlCommand(Query, connection);
                    cmd.Parameters.AddWithValue("@EventId", model.EventId);
                    cmd.Parameters.AddWithValue("@EventTitle", model.EventTitle);
                    cmd.Parameters.AddWithValue("@Date", da);
                    cmd.Parameters.AddWithValue("@EmailId", model.EmailId);
                    cmd.Parameters.AddWithValue("@Image", model.Image);
                    cmd.Parameters.AddWithValue("@Price", model.Price);
                    cmd.Parameters.AddWithValue("@Description", model.Description);
                    cmd.Parameters.AddWithValue("@Status", model.Status);
                    cmd.Parameters.AddWithValue("@Url", model.Url);
                    cmd.ExecuteNonQuery();
                    connection.Close();
                    return "Success";
                }
                else
                {
                    return "Exists";
                }
            }
            catch (Exception ex)
            {
                return "Error!";
            }
        }

        
        internal List<WishListModel> GetWishlist(string email)
        {
            List<WishListModel> list = new List<WishListModel>();
            SqlCommand cmd = new SqlCommand("select * from WishList where EmailId=@EmailId", connection);
            cmd.Parameters.AddWithValue("@EmailId", email);
            SqlDataReader dr;
            try
            {
                connection.Open();
                dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    list.Add(new WishListModel()
                    {
                        EventId = dr.GetString(dr.GetOrdinal("EventId")),
                        EventTitle = dr.GetString(dr.GetOrdinal("EventTitle")),
                        Date = dr.GetDateTime(dr.GetOrdinal("Date")),
                        Image = dr.GetString(dr.GetOrdinal("Image")),
                        Price = dr.GetString(dr.GetOrdinal("Price")),
                        Description = dr.GetString(dr.GetOrdinal("Description")),
                        Url = dr.GetString(dr.GetOrdinal("Url"))
                    });

                }
                dr.Close();
                connection.Close();
            }
            catch (Exception ex)
            {
                return null;
            }
            return list;
        }

        private int GetEvent(string emailId, string eventId)
        {
            string Query = "Select Count(*) from WishList where EmailId=@emailId AND EventId=@EventId";
            connection.Open();
            SqlCommand cmd = new SqlCommand(Query, connection);
            cmd.Parameters.AddWithValue("EmailId", emailId);
            cmd.Parameters.AddWithValue("EventId", eventId);

            int flag = (int)cmd.ExecuteScalar();
            connection.Close();

            return flag;
        }

        public string RemoveWishlist(string eventId,object emailId)
        {
            
            string query = "Delete from WishList where EventId=@eventId AND EmailId=@emailId";
            connection.Open();
            SqlCommand cmd = new SqlCommand(query, connection);
            cmd.Parameters.AddWithValue("@emailId", emailId);
            cmd.Parameters.AddWithValue("@eventId",eventId);
            
            cmd.ExecuteNonQuery();
            connection.Close();
            return "success";
        }
    }
}