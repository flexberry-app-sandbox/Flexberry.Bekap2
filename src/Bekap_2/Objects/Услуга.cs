﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Bekap_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Услуга.
    /// </summary>
    // *** Start programmer edit section *** (Услуга CustomAttributes)

    // *** End programmer edit section *** (Услуга CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УслугаE", new string[] {
            "у as \'У\'",
            "Услуга as \'Услуга\'",
            "Длительность as \'Длительность\'",
            "Цена as \'Цена\'"})]
    [AssociatedDetailViewAttribute("УслугаE", "СоставУслуги", "СоставУслугиE", true, "", "Состав услуги", true, new string[] {
            ""})]
    [View("УслугаL", new string[] {
            "у as \'У\'",
            "Услуга as \'Услуга\'",
            "Длительность as \'Длительность\'",
            "Цена as \'Цена\'"})]
    public class Услуга : ICSSoft.STORMNET.DataObject
    {
        
        private int fу;
        
        private string fУслуга;
        
        private System.DateTime fДлительность;
        
        private double fЦена;
        
        private IIS.Bekap_2.DetailArrayOfСоставУслуги fСоставУслуги;
        
        // *** Start programmer edit section *** (Услуга CustomMembers)

        // *** End programmer edit section *** (Услуга CustomMembers)

        
        /// <summary>
        /// Длительность.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Длительность CustomAttributes)

        // *** End programmer edit section *** (Услуга.Длительность CustomAttributes)
        public virtual System.DateTime Длительность
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Длительность Get start)

                // *** End programmer edit section *** (Услуга.Длительность Get start)
                System.DateTime result = this.fДлительность;
                // *** Start programmer edit section *** (Услуга.Длительность Get end)

                // *** End programmer edit section *** (Услуга.Длительность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Длительность Set start)

                // *** End programmer edit section *** (Услуга.Длительность Set start)
                this.fДлительность = value;
                // *** Start programmer edit section *** (Услуга.Длительность Set end)

                // *** End programmer edit section *** (Услуга.Длительность Set end)
            }
        }
        
        /// <summary>
        /// у.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.у CustomAttributes)

        // *** End programmer edit section *** (Услуга.у CustomAttributes)
        public virtual int у
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.у Get start)

                // *** End programmer edit section *** (Услуга.у Get start)
                int result = this.fу;
                // *** Start programmer edit section *** (Услуга.у Get end)

                // *** End programmer edit section *** (Услуга.у Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.у Set start)

                // *** End programmer edit section *** (Услуга.у Set start)
                this.fу = value;
                // *** Start programmer edit section *** (Услуга.у Set end)

                // *** End programmer edit section *** (Услуга.у Set end)
            }
        }
        
        /// <summary>
        /// Услуга.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Услуга CustomAttributes)

        // *** End programmer edit section *** (Услуга.Услуга CustomAttributes)
        [StrLen(255)]
        public virtual string Услуга
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Услуга Get start)

                // *** End programmer edit section *** (Услуга.Услуга Get start)
                string result = this.fУслуга;
                // *** Start programmer edit section *** (Услуга.Услуга Get end)

                // *** End programmer edit section *** (Услуга.Услуга Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Услуга Set start)

                // *** End programmer edit section *** (Услуга.Услуга Set start)
                this.fУслуга = value;
                // *** Start programmer edit section *** (Услуга.Услуга Set end)

                // *** End programmer edit section *** (Услуга.Услуга Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Цена CustomAttributes)

        // *** End programmer edit section *** (Услуга.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Цена Get start)

                // *** End programmer edit section *** (Услуга.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (Услуга.Цена Get end)

                // *** End programmer edit section *** (Услуга.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Цена Set start)

                // *** End programmer edit section *** (Услуга.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Услуга.Цена Set end)

                // *** End programmer edit section *** (Услуга.Цена Set end)
            }
        }
        
        /// <summary>
        /// Услуга.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.СоставУслуги CustomAttributes)

        // *** End programmer edit section *** (Услуга.СоставУслуги CustomAttributes)
        public virtual IIS.Bekap_2.DetailArrayOfСоставУслуги СоставУслуги
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.СоставУслуги Get start)

                // *** End programmer edit section *** (Услуга.СоставУслуги Get start)
                if ((this.fСоставУслуги == null))
                {
                    this.fСоставУслуги = new IIS.Bekap_2.DetailArrayOfСоставУслуги(this);
                }
                IIS.Bekap_2.DetailArrayOfСоставУслуги result = this.fСоставУслуги;
                // *** Start programmer edit section *** (Услуга.СоставУслуги Get end)

                // *** End programmer edit section *** (Услуга.СоставУслуги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.СоставУслуги Set start)

                // *** End programmer edit section *** (Услуга.СоставУслуги Set start)
                this.fСоставУслуги = value;
                // *** Start programmer edit section *** (Услуга.СоставУслуги Set end)

                // *** End programmer edit section *** (Услуга.СоставУслуги Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УслугаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугаE", typeof(IIS.Bekap_2.Услуга));
                }
            }
            
            /// <summary>
            /// "УслугаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугаL", typeof(IIS.Bekap_2.Услуга));
                }
            }
        }
    }
}
