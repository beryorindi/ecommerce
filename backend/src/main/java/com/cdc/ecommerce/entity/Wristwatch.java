package com.cdc.ecommerce.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="wirstwatch")
public class Wristwatch {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="name", nullable=false)
	private String name;
	
	@Column(name="type_id", nullable=false)
	private int typeId;
	
	@Column(name="price", nullable=false)
	private String price;
	
	@Column(name="strap_id", nullable=false)
	private int strapId;
	
	@Column(name="color_id", nullable=false)
	private int colorId;
	
	@Column(name="detail", nullable=false)
	private String detail;
	
	@Column(name="submit_date", nullable=false)
	private Date submitDate;
	
	@Column(name="likes", nullable=false)
	private String likes;
	
	@Column(name="image_id", nullable=false)
	private int image_id;
	
	@Column(name="discount", nullable=false)
	private int discount;
	
	public Wristwatch() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getTypeId() {
		return typeId;
	}

	public void setTypeId(Integer typeId) {
		this.typeId = typeId;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public Integer getStrapId() {
		return strapId;
	}

	public void setStrapId(Integer strapId) {
		this.strapId = strapId;
	}

	public Integer getColorId() {
		return colorId;
	}

	public void setColorId(Integer colorId) {
		this.colorId = colorId;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public Date getSubmitDate() {
		return submitDate;
	}

	public void setSubmitDate(Date submitDate) {
		this.submitDate = submitDate;
	}

	public String getLikes() {
		return likes;
	}

	public void setLikes(String likes) {
		this.likes = likes;
	}

	public Integer getImage_id() {
		return image_id;
	}

	public void setImage_id(Integer image_id) {
		this.image_id = image_id;
	}

	public Integer getDiscount() {
		return discount;
	}

	public void setDiscount(Integer discount) {
		this.discount = discount;
	}
	
	
}
