package com.demo.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class Dbutil {

	static Connection conn=null;
	public static void main(String[] args) {
		
		
		public Connection getConnection()
		{
			
			DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
			String url="jdbc:mysql://192.168.10.150:3306/dac41?useSSL=False";
			conn=DriverManager.getConnection(url,"dac41","welcome");
			
		}
	}

}
