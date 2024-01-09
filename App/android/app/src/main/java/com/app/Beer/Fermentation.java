package com.app.Beer;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;


import javax.annotation.processing.Generated;

@Generated("jsonschema2pojo")
public class Fermentation {

    @SerializedName("temp")
    @Expose
    private Temp__1 temp;

    public Temp__1 getTemp() {
    return temp;
    }

    public void setTemp(Temp__1 temp) {
    this.temp = temp;
    }

}