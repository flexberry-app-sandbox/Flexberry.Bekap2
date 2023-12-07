package Bekap_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Услуга
 */
@Entity(name = "IISBekap_2Услуга")
@Table(schema = "public", name = "Услуга")
public class Usluga {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "у")
    private Integer у;

    @Column(name = "Услуга")
    private String услуга;

    @Column(name = "Длительность")
    private Date длительность;

    @Column(name = "Цена")
    private Double цена;

    @OneToMany(mappedBy = "usluga", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavUslugi> sostavuslugis;


    public Usluga() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getу() {
      return у;
    }

    public void setу(Integer у) {
      this.у = у;
    }

    public String getУслуга() {
      return услуга;
    }

    public void setУслуга(String услуга) {
      this.услуга = услуга;
    }

    public Date getДлительность() {
      return длительность;
    }

    public void setДлительность(Date длительность) {
      this.длительность = длительность;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }


}