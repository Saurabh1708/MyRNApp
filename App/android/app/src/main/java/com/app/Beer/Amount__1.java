package com.app.Beer;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;


import javax.annotation.processing.Generated;
@Generated("jsonschema2pojo")
public class Amount__1 {

    @SerializedName("value")
    @Expose
    private Double value;
    @SerializedName("unit")
    @Expose
    private String unit;

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

}