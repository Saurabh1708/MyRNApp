package com.app.Beer;

import java.util.List;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import javax.annotation.processing.Generated;


@Generated("jsonschema2pojo")
public class Ingredients {

    @SerializedName("malt")
    @Expose
    private List<Malt> malt;
    @SerializedName("hops")
    @Expose
    private List<Hop> hops;
    @SerializedName("yeast")
    @Expose
    private String yeast;

    public List<Malt> getMalt() {
        return malt;
    }

    public void setMalt(List<Malt> malt) {
        this.malt = malt;
    }

    public List<Hop> getHops() {
        return hops;
    }

    public void setHops(List<Hop> hops) {
        this.hops = hops;
    }

    public String getYeast() {
        return yeast;
    }

    public void setYeast(String yeast) {
        this.yeast = yeast;
    }

}
