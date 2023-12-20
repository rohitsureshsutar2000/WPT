package com.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;

import com.demo.beans.Product;

public class DaoImpl implements Dao {

	static Connection conn=null;
	static PreparedStatement display;
	static {
		conn=D
	}
	
	List<Product> plist=new ArrayList<>();
	
	@Override
	public List<Product> DisplayAll() {
		
		return plist;
	}
	
}
