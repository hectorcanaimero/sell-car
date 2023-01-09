# Proyecto SaaS para Ventas de vehículos

## Tablas

### Master

1. Users
   * Entity [firstName, lastName, email, phone, password, status]
   * [x] Create User
   * [x] Auth Login
   * [x] Forgot Password
   * [x] Update User
   * [x] Profile
2. Payments

### Tenancy

1. Type
   * Entity [name]
   * [ ] CRUD
2. Brands
   * Entity [name, type]
   * [ ] CRUD
3. Models
   * Name
   * Brands ID
   * [ ] CRUD
4. Vehicles
   * Name
   * Type ID
   * Brand ID
   * Model ID
   * Complements
     * Year
     * City/State
     * Km
     * Change
     * Car Body
     * Gas
     * Color
   * Photos
   * Description
   * Items
5. Leads
   * Entity [name, email, phone, vehicles, comunicacion<whatsapp, email>]
   * [ ] CRUD
   * [ ] Send WhatsApp and e-mail
6. SAC
   * Entity [name, email, phone, subect, message]
   * [ ] Create SAC
   * [ ] Send e-mail
7. Config
   * Workspace
   * User ID
   * Theme
     * Logo
     * Colors
   * Company
     * Address
     * Geolocation
     * Horarios
     * Phone
     * WhatsApp
     * E-mail
   * RRSS
     * type
     * url
   * Analytics
     * Google
     * Pixels
     * Search Console
     * Tik Tok
     * Hotjar

### Funcionalidades

1. Workspace por agéncia
2. Dashboard Analytics
3. Integración con Mercado Libre y Facebook
