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
    /// Сотрудник.
    /// </summary>
    // *** Start programmer edit section *** (сотрудник CustomAttributes)

    // *** End programmer edit section *** (сотрудник CustomAttributes)
    [AutoAltered()]
    [Caption("Сотрудник")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("сотрудникE", new string[] {
            "Код as \'Код\'",
            "рож as \'Рож\'",
            "Пол as \'Пол\'",
            "ФИО as \'ФИО\'",
            "Должности as \'Должности\'",
            "Должности.должности as \'Должности\'"}, Hidden=new string[] {
            "Должности.должности"})]
    [MasterViewDefineAttribute("сотрудникE", "Должности", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "должности")]
    [View("сотрудникL", new string[] {
            "Код as \'Код\'",
            "рож as \'Рож\'",
            "Пол as \'Пол\'",
            "ФИО as \'ФИО\'",
            "Должности.должности as \'Должности\'"})]
    public class сотрудник : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private System.DateTime fрож;
        
        private IIS.Bekap_2.Пол fПол;
        
        private string fФИО;
        
        private IIS.Bekap_2.Должности fДолжности;
        
        // *** Start programmer edit section *** (сотрудник CustomMembers)

        // *** End programmer edit section *** (сотрудник CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (сотрудник.Код CustomAttributes)

        // *** End programmer edit section *** (сотрудник.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (сотрудник.Код Get start)

                // *** End programmer edit section *** (сотрудник.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (сотрудник.Код Get end)

                // *** End programmer edit section *** (сотрудник.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (сотрудник.Код Set start)

                // *** End programmer edit section *** (сотрудник.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (сотрудник.Код Set end)

                // *** End programmer edit section *** (сотрудник.Код Set end)
            }
        }
        
        /// <summary>
        /// Пол.
        /// </summary>
        // *** Start programmer edit section *** (сотрудник.Пол CustomAttributes)

        // *** End programmer edit section *** (сотрудник.Пол CustomAttributes)
        public virtual IIS.Bekap_2.Пол Пол
        {
            get
            {
                // *** Start programmer edit section *** (сотрудник.Пол Get start)

                // *** End programmer edit section *** (сотрудник.Пол Get start)
                IIS.Bekap_2.Пол result = this.fПол;
                // *** Start programmer edit section *** (сотрудник.Пол Get end)

                // *** End programmer edit section *** (сотрудник.Пол Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (сотрудник.Пол Set start)

                // *** End programmer edit section *** (сотрудник.Пол Set start)
                this.fПол = value;
                // *** Start programmer edit section *** (сотрудник.Пол Set end)

                // *** End programmer edit section *** (сотрудник.Пол Set end)
            }
        }
        
        /// <summary>
        /// рож.
        /// </summary>
        // *** Start programmer edit section *** (сотрудник.рож CustomAttributes)

        // *** End programmer edit section *** (сотрудник.рож CustomAttributes)
        public virtual System.DateTime рож
        {
            get
            {
                // *** Start programmer edit section *** (сотрудник.рож Get start)

                // *** End programmer edit section *** (сотрудник.рож Get start)
                System.DateTime result = this.fрож;
                // *** Start programmer edit section *** (сотрудник.рож Get end)

                // *** End programmer edit section *** (сотрудник.рож Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (сотрудник.рож Set start)

                // *** End programmer edit section *** (сотрудник.рож Set start)
                this.fрож = value;
                // *** Start programmer edit section *** (сотрудник.рож Set end)

                // *** End programmer edit section *** (сотрудник.рож Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (сотрудник.ФИО CustomAttributes)

        // *** End programmer edit section *** (сотрудник.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (сотрудник.ФИО Get start)

                // *** End programmer edit section *** (сотрудник.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (сотрудник.ФИО Get end)

                // *** End programmer edit section *** (сотрудник.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (сотрудник.ФИО Set start)

                // *** End programmer edit section *** (сотрудник.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (сотрудник.ФИО Set end)

                // *** End programmer edit section *** (сотрудник.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Сотрудник.
        /// </summary>
        // *** Start programmer edit section *** (сотрудник.Должности CustomAttributes)

        // *** End programmer edit section *** (сотрудник.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.Bekap_2.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (сотрудник.Должности Get start)

                // *** End programmer edit section *** (сотрудник.Должности Get start)
                IIS.Bekap_2.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (сотрудник.Должности Get end)

                // *** End programmer edit section *** (сотрудник.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (сотрудник.Должности Set start)

                // *** End programmer edit section *** (сотрудник.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (сотрудник.Должности Set end)

                // *** End programmer edit section *** (сотрудник.Должности Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "сотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View сотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("сотрудникE", typeof(IIS.Bekap_2.сотрудник));
                }
            }
            
            /// <summary>
            /// "сотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View сотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("сотрудникL", typeof(IIS.Bekap_2.сотрудник));
                }
            }
        }
    }
}
