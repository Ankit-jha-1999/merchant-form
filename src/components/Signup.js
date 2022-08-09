import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./signup.css";
import "./merchantinfo.css";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="Signup-form-container">
      <div className="signup-form">
        <div className="cart">
          <img
            src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png"
            className="img"
          />
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field-title ">
            <h1 className="merchant-title">Merchant Information</h1>
          </div>
          <div className="input-fields-wrapper-two">
            <div className="input-field-two">
              <input
                type="text"
                autoComplete="off"
                {...register("shopOwnerName", {
                  required: "Shop Owner Name is required",
                  min:{
                    value:2,
                    message:"Minimum 2 characters is required"
                  },
                  max:{
                    value:23,
                    message:"Maximum 23 characters allowed"
                  }
                })}
                onKeyUp={() => {
                  trigger("shopOwnerName");
                }}
              />
              <label>Shop Owner Name</label>
              {errors.shopOwnerName && (
                <small className="text-danger">
                  {errors.shopOwnerName.message}
                </small>
              )}
            </div>
            <div className="input-field-two">
              <input
                type="text"
                autoComplete="off"
                {...register("businessName", {
                  required: "Business Name is Required",
                })}
                onKeyUp={() => {
                  trigger("businessName");
                }}
              />
              <label>Business Entity(shop) Name</label>
              {errors.businessName && (
                <small className="text-danger">
                  {errors.businessName.message}
                </small>
              )}
            </div>
          </div>
          <div className="input-fields-wrapper-three">
            <div className="input-field-three">
              <input
                type="number"
                autoComplete="off"
                {...register("merchantNumber", {
                  required: "Merchant Number is Required",
                  pattern: {
                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    message: "Phone Number is invalid",
                  },
                })}
                onKeyUp={() => {
                  trigger("merchantNumber");
                }}
              />
              <label>Merchant's Contact Number</label>
              {errors.merchantNumber && (
                <small className="text-danger">
                  {errors.merchantNumber.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="number"
                autoComplete="off"
                {...register("shopNumber", {
                  required: "Shop Number is Required",
                  pattern: {
                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    message: "Phone Number is invalid",
                  },
                })}
                onKeyUp={() => {
                  trigger("shopNumber");
                }}
              />
              <label>Shop Mobile Number</label>
              {errors.shopNumber && (
                <small className="text-danger">
                  {errors.shopNumber.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="email"
                autoComplete="off"
                {...register("merchantEmail", {
                  required: "Merchant Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                onKeyUp={() => {
                  trigger("merchantEmail");
                }}
              />
              <label>Merchant's Email id</label>
              {errors.merchantEmail && (
                <small className="text-danger">
                  {errors.merchantEmail.message}
                </small>
              )}
            </div>
          </div>
          <div className="input-fields-wrapper-three">
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("merchantShopGstNo", {
                  required: "Merchant Shop Gst No is Required",
                })}
                onKeyUp={() => {
                  trigger("merchantShopGstNo");
                }}
              />
              <label>Merchant Shop GST No.</label>
              {errors.merchantShopGstNo && (
                <small className="text-danger">
                  {errors.merchantShopGstNo.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("shopEstablishmentCity", {
                  required: "Shop Establishment City Name is Required",
                })}
                onKeyUp={() => {
                  trigger("shopEstablishmentCity");
                }}
              />
              <label>Shop Establishment City</label>
              {errors.shopEstablishmentCity && (
                <small className="text-danger">
                  {errors.shopEstablishmentCity.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("selectState", {
                  required: "Select State is Required",
                })}
                onKeyUp={() => {
                  trigger("selectState");
                }}
              />
              <label>Select State</label>
              {errors.selectState && (
                <small className="text-danger">
                  {errors.selectState.message}
                </small>
              )}
            </div>
          </div>
          <div className="textarea-one">
            <textarea
              placeholder="Shop Complete Adress as per Records"
              className="textarea-text-one"
              {...register("shopAdress", {
                required: "Shop Adress is Required",
                max:{
                  value:40,
                  message:"Maximum 40 characters allowed"
                }
              })}
              onKeyUp={() => {
                trigger("shopAdress");
              }}
            ></textarea>
            {errors.shopAdress && (
              <small className="text-danger">{errors.shopAdress.message}</small>
            )}
          </div>
          <div className="input-fields-wrapper-two">
            <div className="input-field-two">
              <input
                type="text"
                autoComplete="off"
                {...register("shopNearLandmark", {
                  required: "Shop Owner Name is Required",
                })}
                onKeyUp={() => {
                  trigger("shopNearLandmark");
                }}
              />
              <label>Shop Near by Landmark</label>
              {errors.shopNearLandmark && (
                <small className="text-danger">
                  {errors.shopNearLandmark.message}
                </small>
              )}
            </div>
          </div>
          <div className="input-fields-wrapper-three">
            <div className="input-field-three">
              <select
                className="select"
                {...register("businessPlanType", {
                  required: "Business Plan Type is Required",
                })}
                onKeyUp={() => {
                  trigger("businessPlanType");
                }}
              >
                <option defaultValue="Business Plan Type">
                  Business Plan Type
                </option>
                <option>Anually</option>
                <option>Half Yearly</option>
              </select>
              <label>Business Plan Type</label>
              {errors.businessPlanType && (
                <small className="text-danger">
                  {errors.businessPlanType.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <select
                className="select"
                {...register("businessCategory", {
                  required: "Business Category is Required",
                })}
                onKeyUp={() => {
                  trigger("businessCategory");
                }}
              >
                <option defaultValue="Business Category">
                  Business Category
                </option>
                <option>Discount Cashback/Offer Coupon</option>
                <option>Retail Store</option>
                <option>Mega Store</option>
                <option>Food Category</option>
                <option>Service Provider</option>
                <option>Appointment Services</option>
              </select>
              <label>Business Category</label>
              {errors.businessCategory && (
                <small className="text-danger">
                  {errors.businessCategory.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("businessSubCategory", {
                  required: "Business Sub Category is Required",
                })}
                onKeyUp={() => {
                  trigger("businessSubCategory");
                }}
              />
              <label>Business Sub Category</label>
              {errors.businessSubCategory && (
                <small className="text-danger">
                  {errors.businessSubCategory.message}
                </small>
              )}
            </div>
          </div>

          {/* ******* PAYMENT SECTION */}

          <div className="field-title payment">
            <h1>Payment Details</h1>
          </div>
          <div className="input-fields-wrapper-three">
            <div className="input-field-three">
              <select
                className="select"
                {...register("selectOutletCategory", {
                  required: "Select Outlet Category is Required",
                })}
                onKeyUp={() => {
                  trigger("selectOutletCategory");
                }}
              >
                <option defaultValue="Select Outlet Category"></option>
                <option>ExtraOrdinary Outlet</option>
                <option>Ordinary Outlet</option>
                <option>Services & Appointment Outlet</option>
              </select>
              <label>Select Outlet Category</label>
              {errors.selectOutletCategory && (
                <small className="text-danger">
                  {errors.selectOutletCategory.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("businessPlanAmount", {
                  required: "Business Plan Amount is Required",
                  pattern:{
                    value: /^[0-9]*$/,
                    message:"Only numbers are allowed"
                  }
                })}
                onKeyUp={() => {
                  trigger("businessPlanAmount");
                }}
              />
              <label>Business Plan Amount</label>
              {errors.businessPlanAmount && (
                <small className="text-danger">
                  {errors.businessPlanAmount.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("totalGst", {
                  required: "Total Gst is Required",
                  pattern:{
                    value: /^[0-9]*$/,
                    message:"Only numbers are allowed"
                  }
                })}
                onKeyUp={() => {
                  trigger("totalGst");
                }}
              />
              <label>Total Amount Inc. GST</label>
              {errors.totalGst && (
                <small className="text-danger">{errors.totalGst.message}</small>
              )}
            </div>
          </div>
          <div className="input-fields-wrapper-three">
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                placeholder="DD/MM/YY"
                {...register("dateOfSale", {
                  required: "Date Of Sale is Required",
                })}
                onKeyUp={() => {
                  trigger("dateOfSale");
                }}
              />
              <label>Date of Sale</label>
              {errors.dateOfSale && (
                <small className="text-danger">
                  {errors.dateOfSale.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="text"
                name="minimumValue"
                autoComplete="off"
                {...register("minimumValue", {
                  required: "minimumValue is Required",
                  pattern:{
                    value: /^[0-9]*$/,
                    message:"Only numbers are allowed"
                  }
                })}
                onKeyUp={() => {
                  trigger("minimumValue");
                }}
              />
              <label>Minimum Value</label>
              {errors.minimumValue && (
                <small className="text-danger">
                  {errors.minimumValue.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("offerValue", {
                  required: "offerValue is Required",
                  pattern:{
                    value: /^[0-9]*$/,
                    message:"Only numbers are allowed"
                  }
                })}
                onKeyUp={() => {
                  trigger("offerValue");
                }}
              />
              <label>Offer value</label>
              {errors.offerValue && (
                <small className="text-danger">
                  {errors.offerValue.message}
                </small>
              )}
            </div>
          </div>
          <div className="textarea-one">
            <textarea
              placeholder="Remarks"
              className="textarea-text-one"
              {...register("remark", {
                required: "Remark is Required",
                max:{
                  value:60,
                  message:"Maximum 60 characters allowed"
                }
              })}
              onKeyUp={() => {
                trigger("Remarks");
              }}
            ></textarea>
            {errors.remark && (
              <small className="text-danger">{errors.remark.message}</small>
            )}
          </div>
          <div className="input-fields-wrapper-three">
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("bankName", {
                  required: "Bank Name is Required",
                })}
                onKeyUp={() => {
                  trigger("bankName");
                }}
              />
              <label>Bank name</label>
              {errors.bankName && (
                <small className="text-danger">{errors.bankName.message}</small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="text"
                autoComplete="off"
                {...register("chequeNumber", {
                  required: "Cheque Number is Required",
                })}
                onKeyUp={() => {
                  trigger("chequeNumber");
                }}
              />
              <label>Cheque Number</label>
              {errors.chequeNumber && (
                <small className="text-danger">
                  {errors.chequeNumber.message}
                </small>
              )}
            </div>
            <div className="input-field-three">
              <input
                type="number"
                autoComplete="off"
                {...register("chequeDate", {
                  required: "Cheque Date is Required",
                })}
                onKeyUp={() => {
                  trigger("chequeDate");
                }}
              />
              <label>Cheque Date</label>
              {errors.chequeDate && (
                <small className="text-danger">
                  {errors.chequeDate.message}
                </small>
              )}
            </div>
          </div>
          <div className="input-fields-wrapper-two">
            <div className="input-field-two">
              <input
                type="file"
                id="myfile"
                name="myfile"
                className="custom-file-input browse"
                placeholder="Shop Front Photo"
                {...register("shopFrontPhoto", {
                  required: "Shop Front Photo is Required",
                })}
              />
              {errors.shopFrontPhoto && (
                <small className="text-danger">
                  {errors.shopFrontPhoto.message}
                </small>
              )}
            </div>
            <div className="input-field-two">
              <input
                type="file"
                id="myfile"
                name="myfile"
                className="custom-file-inputs browse"
                placeholder="Payment Photo"
                {...register("PaymentPhoto", {
                  required: "Payment Photo is Required",
                })}
              />
              {errors.PaymentPhoto && (
                <small className="text-danger">
                  {errors.PaymentPhoto.message}
                </small>
              )}
            </div>
          </div>
          <div className="signup-btn-box">
            <button className="signup-btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
